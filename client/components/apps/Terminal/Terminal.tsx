'use client'
import React, { useState } from 'react'
import { CommandNotFound, Help, Row } from './Util'
import { generateRandomString } from '@/lib/utils'
const Terminal: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<String[]>([''])
  const [content, setContent] = useState<JSX.Element[]>([])

  const generateRow = (row: JSX.Element) => {
    setContent(s => [...s, row])
  }
  const executeCommand = (event: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if (event.key === 'Enter') {
      const input = document.querySelector(`#terminal-input-${id}`) as HTMLInputElement
      const command = input.value
      const newArr = commandHistory
      newArr.push(command)
      setCommandHistory(newArr)
      // BUG: if use the following statement,it errors! Lessons in blood!
      // setCommandHistory(s => [...s, command])
      const key = `${command}-${commandHistory.length}`
      switch (command) {
        case 'help':
          generateRow(<Help key={generateRandomString()} />)
          break
        case 'clear':
          setContent([])
          break
        case 'ls':
          generateRow(<div key={generateRandomString()}>Desktop  Downloads  Documents</div>)
          break
        case 'cd Documents':
          generateRow(<div key={generateRandomString()}>cd Documents</div>)
          break
        case 'cd Downloads':
          generateRow(<div key={generateRandomString()}>cd Downloads</div>)
          break
        case 'cd Desktop':
          generateRow(<div key={generateRandomString()}>cd Desktop</div>)
          break
        case 'pwd':
          generateRow(<div key={generateRandomString()}>/Users/guest</div>)
          break
        case 'open .':
          generateRow(<div key={generateRandomString()}>Opening Finder...</div>)
          break
        case 'open vscode':
          generateRow(<div key={generateRandomString()}>Opening Visual Studio Code...</div>)
          break
        default:
          generateRow(<CommandNotFound key={generateRandomString()} command={command} />)
      }

      generateRow(<Row key={key} id={commandHistory.length} onkeydown={(e: React.KeyboardEvent<HTMLInputElement>) => executeCommand(e, commandHistory.length)} />)
    }
  }

  return (
    <div className="p-4 pr-[5px] text-white bg-gray-700 rounded-lg">
      <div className="h-6 rounded-lg"></div>
      <div className="flex flex-col w-full h-[400px] overflow-y-scroll mb-2 chatlist_"
      >
        <div className='flex w-full h-6'>
          <span className="mr-2 text-yellow-400">guest</span>
          <span className="mr-2 text-green-400">@macbook-pro</span>
          <span className="mr-2 text-blue-400">~</span>
          <span className="mr-2 text-pink-400">$</span>
          <input
            type="text"
            id={'terminal-input-0'}
            className="flex-1 w-full px-1 text-white bg-transparent outline-none"
            onKeyDown={e => executeCommand(e, 0)}
          />
        </div>
        <div className='flex-1 w-full'>
          {...content}
        </div>
      </div>
    </div>
  )
}

export default Terminal
