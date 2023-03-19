'use client'
import React, { useEffect, useState } from 'react'
import { useAppsStore, useTerminalStore } from 'store'
import { shallow } from 'zustand/shallow'
import { motion } from 'framer-motion'
import { useLocalStorageState } from 'ahooks'
import { CommandNotFound, Help, Row } from './Util'
import { FolderStructure } from './Data'
import type { TerminalData } from './Data'
import { generateRandomString } from '@/lib/utils'
interface CommandList {
  [key: string]:
  { (): void } | { (arg: string | TerminalData): void }
}

const Terminal: React.FC = () => {
  const [currentId, setCurrentId] = useTerminalStore(s => [
    s.currentId,
    s.setCurrentId,
  ], shallow)
  const [changeCount, setChangeCount] = useState<number>(0)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [currentDirectory, setCurrentDirectory] = useState<string>('')
  const [targetFolder, setTargetFolder] = useState<TerminalData>(FolderStructure)
  const [lsItems, setLsItmes] = useLocalStorageState('LS_Items', { defaultValue: targetFolder.children.map(item => item.title).join('   ') })
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
    localStorage.setItem('Terminal-CurrentDirectory', currentDirectory)
  }, [currentDirectory, commandHistory.length])

  useEffect(() => {
    setCurrentDirectory(`${currentDirectory + targetFolder?.title}${targetFolder?.type === 'folder' ? '/' : ''}`)
    const items = targetFolder.children.map(item => item.title).join('   ')
    setLsItmes(items)
  }, [targetFolder])

  const generateRow = (row: JSX.Element) => {
    setContent(s => [...s, row])
  }

  const clear = () => {
    setContent([])
    const input = document.querySelector('#terminal-input-0') as HTMLInputElement
    input.value = ''
  }

  const open = (arg = '') => {
    generateRow(<div key={generateRandomString()}>Opening {arg}...</div>)
    openApp(arg)
  }
  const close = (arg = '') => {
    closeApp(arg)
    generateRow(<div key={generateRandomString()}>Closed {arg}...</div>)
  }
  const dfs = (node: TerminalData, args: string[]) => {
    if (!node)
      return 0
    for (let i = 0; i < node.children.length; i++) {
      if (!args.includes(node.children[i].title.toLowerCase())) {
        dfs(node.children[i], args)
      }
      else {
        setTargetFolder(node.children[i])
        return 1
      }
    }
  }
  const cd = (arg = '') => {
    const paths = (localStorage.getItem('Terminal-CurrentDirectory') as string)
    const args = [arg, arg.toUpperCase(), arg.toLowerCase(), arg.charAt(0).toUpperCase() + arg.slice(1)]
    if (arg === '..' || !arg) {
      if (!paths) {
        setCurrentDirectory('')
      }
      else {
        // to resolve when the current directory in first layer
        if (paths.split('/').length <= 2) {
          setCurrentDirectory('')
          setTargetFolder(FolderStructure)
        }
        else {
          const curPath = paths.split('/').slice(0, -2).join('/')
          const newArg = curPath.split('/').pop() as string
          const newArgs = [newArg, newArg.toUpperCase(), newArg.toLowerCase(), newArg.charAt(0).toUpperCase() + newArg.slice(1)]
          dfs(FolderStructure, newArgs)
          setTimeout(() => {
            setCurrentDirectory(`${curPath}/`)
          }, 10)
        }
      }
    }
    else if (arg === '~') {
      setCurrentDirectory('')
      setTargetFolder(FolderStructure)
    }
    else {
      dfs(targetFolder, args)
      const target = JSON.parse(localStorage.getItem('LS_Items') as string).split(' ').some(
        (item: string) => item === arg || item.toLowerCase() === arg || item.toLowerCase() === arg.toLowerCase(),
      )
      !target && generateRow(<div key={generateRandomString()}>Directory of File not found: {arg}</div>)
    }
  }
  const ls = () => {
    const itmes = JSON.parse(localStorage.getItem('LS_Items') as string)
    // eslint-disable-next-line array-callback-return
    itmes.split(' ').map((item: string) => {
      generateRow(<div key={generateRandomString()} className={item.includes('.') ? 'text-primary' : ''}>{item}</div>)
    })
  }

  const cat = (arg = '') => {
    targetFolder.children.map((item) => {
      return item.title === arg ? generateRow(<div key={generateRandomString()}>{item.content}</div> as JSX.Element) : ''
    })
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
    cat,
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
    else if (event.key === 'Tab') {
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
  const clickToFocus = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const currentInput = document.querySelector(`#terminal-input-${currentId}`) as HTMLInputElement
    currentInput.focus()
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
        <div>Welcome to TueboMac,type `help` to get started,have fun!</div>
        <div
          className='flex-1 w-full'
          onClick={e => clickToFocus(e)}
        >
          {...content}
        </div>
      </div>
    </motion.div>
  )
}

export default Terminal
