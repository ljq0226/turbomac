'use client'
import React, { useRef, useState } from 'react'
import Help from './Help'
import { useTerminalStore } from '@/store'

const defaultCommands = ['help', 'ls']

const CommandNotFound = (command: string) => {
  return (
    <div className='flex w-full h-6'>
      <span className="mr-2">zsh: command not found: {command}</span>
    </div>
  )
}

const Terminal: React.FC = () => {
  const store: any = useTerminalStore.getState()
  const windowRef = useRef(null)
  const [command, setCommand] = useState('')
  const [content, setContent] = useState<JSX.Element>(<></>)
  const [inputDisabled, setInputDisabled] = useState(false)

  const generateRow = (row: JSX.Element) => {
    setContent(s => (<>
      {s}
      {row}
    </>))
  }
  // listen input change
  const handleCommandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value)
  }

  const inputRow = () => (
    <div className='flex w-full h-6'>
      <span className="mr-2 text-yellow-400">guest</span>
      <span className="mr-2 text-green-400">@macbook-pro</span>
      <span className="mr-2 text-blue-400">~</span>
      <span className="mr-2 text-pink-400">$</span>
      <input
        type="text"
        value={command}
        onChange={handleCommandChange}
        disabled={inputDisabled}
        className="flex-1 w-full px-1 text-white bg-transparent outline-none"
      />
    </div>

  )

  // execute the command
  const executeCommand = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      switch (command) {
        case 'help':
          generateRow(<Help />)
          break
        case 'cls':
          setContent(<></>)
          break
        default:
          generateRow(CommandNotFound(command))
      }
      generateRow(inputRow())

      setCommand('')
    }
  }

  return (

    <div className="p-4 text-white bg-gray-900">
      <div className="h-6">
      </div>
      <div ref={windowRef} className="flex flex-col w-full h-[400px] overflow-y-scroll mb-2">
        <div className='flex w-full h-6'>
          <span className="mr-2 text-yellow-400">guest</span>
          <span className="mr-2 text-green-400">@macbook-pro</span>
          <span className="mr-2 text-blue-400">~</span>
          <span className="mr-2 text-pink-400">$</span>
          <input
            type="text"
            value={command}
            onChange={handleCommandChange}
            disabled={inputDisabled}
            onKeyDown={executeCommand}
            className="flex-1 w-full px-1 text-white bg-transparent outline-none"
          />
        </div>
        {content}

      </div>
    </div>
  )
}

export default Terminal
