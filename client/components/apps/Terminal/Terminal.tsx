'use client'
import React, { useEffect, useState } from 'react'
import { useAppsStore, useTerminalStore } from 'store'
import { shallow } from 'zustand/shallow'
import { motion } from 'framer-motion'
import { CommandNotFound, Help, Row } from './Util'
import { FolderStructure } from './Data'
import { generateRandomString } from '@/lib/utils'

interface CommandList {
  [key: string]: { (): void } | {
    (arg: string): void
  }
}

const Terminal: React.FC = () => {
  const { setCurrentId } = useTerminalStore(s => ({
    setCurrentId: s.setCurrentId,
  }), shallow)
  const [changeCount, setChangeCount] = useState<number>(0)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [currentDirectory, setCurrentDirectory] = useState<string>('')
  const [content, setContent] = useState<JSX.Element[]>(
    [<Row
      key={generateRandomString()}
      id={0}
      currentDirectory={currentDirectory}
      onkeydown={(e: React.KeyboardEvent<HTMLInputElement>) => executeCommand(e, 0)}
    />,
    ])

  const openApp = useAppsStore(s => s.openApp)
  const closeApp = useAppsStore(s => s.closeApp)

  useEffect(() => {
    const input = document.querySelector(`#terminal-input-${commandHistory.length}`) as HTMLInputElement
    if (commandHistory.length)
      input.value = commandHistory[commandHistory.length + changeCount]
    if (!changeCount) {
      input.value = ''
      setChangeCount(0)
    }
  }, [changeCount])

  useEffect(() => {
    const span = document.querySelector(`#terminal-currentDirectory-${commandHistory.length}`) as HTMLSpanElement
    span.innerHTML = currentDirectory
  }, [currentDirectory, commandHistory.length])

  const generateRow = (row: JSX.Element) => {
    setContent(s => [...s, row])
  }
  const clear = () => {
    setContent([])
    const input = document.querySelector('#terminal-input-0') as HTMLInputElement
    input.value = ''
  }

  const open = (arg: string) => {
    generateRow(<div key={generateRandomString()}>Opening {arg}...</div>)
    openApp(arg)
  }
  const close = (arg: string) => {
    closeApp(arg)
    generateRow(<div key={generateRandomString()}>Closed {arg}...</div>)
  }
  const cd = (arg: string) => {
    if (arg === '..') {
      if (currentDirectory !== '')
        setCurrentDirectory('')
    }
    else {
      const targetFolder = FolderStructure.find(folder => folder.title === arg || folder.title === (arg.charAt(0).toUpperCase() + arg.slice(1)))
      if (targetFolder)
        setCurrentDirectory(`${currentDirectory + targetFolder.title}/`)

      else generateRow(<div key={generateRandomString()}>Directory not found: {arg}</div>)
    }
  }
  const ls = () => {
    if (currentDirectory === '') {
      const items = FolderStructure.map(folder => folder.title).join(' ')
      generateRow(<div key={generateRandomString()}>{items}</div>)
      return
    }
    const currentFolder = FolderStructure.find(folder => folder.title === currentDirectory)
    if (currentFolder && currentFolder.children) {
      const items = currentFolder.children.map(item => item.title).join(' ')
      generateRow(<div key={generateRandomString()}>{items}</div>)
    }
    else {
      generateRow(<div key={generateRandomString()}>No files or folders found in the current directory.</div>)
    }
  }

  function handleArrowUp() {
    setChangeCount(prev => Math.max(prev - 1, -commandHistory.length))
  }

  function handleArrowDown() {
    setChangeCount(prev => Math.min(prev + 1, 0))
  }
  const matchCommand = (inputValue: string): string | null => {
    const matchedCommands = commandHistory.filter(command => command.startsWith(inputValue))
    return matchedCommands.length > 0 ? matchedCommands[matchedCommands.length - 1] : null
  }

  const commandList: CommandList = {
    clear,
    help: () => generateRow(<Help key={generateRandomString()} />),
    open,
    close,
    ls,
    cd,
  }

  function executeCommand(event: React.KeyboardEvent<HTMLInputElement>, id: number) {
    const input = document.querySelector(`#terminal-input-${id}`) as HTMLInputElement
    const [cmd, args] = input.value.trim().split(' ')

    if (event.key === 'ArrowUp') {
      handleArrowUp()
    }
    else if (event.key === 'ArrowDown') {
      handleArrowDown()
    }
    else if (event.key === 'Tab' || event.key === 'ArrowRight') {
      event.preventDefault()
      const matchedCommand = matchCommand(input.value.trim())
      if (matchedCommand)
        input.value = matchedCommand
    }
    else if (event.key === 'Enter') {
      const newArr = commandHistory
      newArr.push(input.value.trim())
      setCommandHistory(newArr)
      if (cmd && Object.keys(commandList).includes(cmd))
        commandList[cmd](args)

      else if (cmd !== '')
        generateRow(<CommandNotFound key={generateRandomString()} command={input.value.trim()} />)

      generateRow(
        <Row
          key={generateRandomString()}
          id={commandHistory.length}
          onkeydown={(e: React.KeyboardEvent<HTMLInputElement>) => executeCommand(e, commandHistory.length)}
          currentDirectory={currentDirectory}
        />,
      )
      setCurrentId(1)
    }
  }

  return (
    <motion.div
      className="p-4 pr-[5px] text-white bg-[#1C1C1E]/95 rounded-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{ fontFamily: 'Menlo, monospace', fontSize: '14px' }}
    >
      <div className="h-6 rounded-lg"></div>
      <div className="flex flex-col w-full h-[400px] overflow-y-scroll mb-2 chatlist_">
        <div className='flex-1 w-full'>
          {...content}
        </div>
      </div>
    </motion.div>
  )
}

export default Terminal
