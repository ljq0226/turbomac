import React from 'react'
import { useTerminalStore } from 'store'
interface RowProps {
  id: number
  onkeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  currentDirectory: string
}

const Row: React.FC<RowProps> = ({ id, onkeydown, currentDirectory }) => {
  const currentId = useTerminalStore(s => s.currentId)
  return (
    <div className='flex flex-col w-full h-12'>
      <div>
        <span className="mr-2 text-yellow-400">funnycoder</span>
        <span className="mr-2 text-green-400">@macbook-pro</span>
        <span className="mr-2 text-blue-400">~</span>
        <span id={`terminal-currentDirectory-${id}`} className="mr-2 text-blue-400"></span>
      </div>
      <div className='flex'>
        <span className="mr-2 text-pink-400">$</span>
        <input
          type="text"
          id={`terminal-input-${id}`}
          autoComplete="off"
          autoFocus={true}
          disabled={currentId !== id}
          className="flex-1 px-1 text-white bg-transparent outline-none"
          onKeyDown={onkeydown}
        />
      </div>

    </div>
  )
}

const Help = () => {
  return (
    <ul key={Math.random().toString()} className="list-disc ml-6 pb-1.5">
      <li>
        <span className="text-purple-400">cat {'<file>'}</span> - See the content
        of {'<file>'}
      </li>
      <li>
        <span className="text-purple-400">cd {'<dir>'}</span> - Move into
        {' <dir>'}, "cd" or"cd .." to move to the parent directory, "cd ~" to
        return to root
      </li>
      <li>
        <span className="text-purple-400">ls</span> - See files and directories
        in the current directory
      </li>
      <li>
        <span className="text-purple-400">clear</span> - Clear the screen
      </li>
      <li>
        <span className="text-purple-400">help</span> - Display this help menu
      </li>
      <li>
        <span className="text-purple-400">apps </span> - show app list
      </li>
      <li>
        <span className="text-purple-400">Open/Close {'<AppId>'}</span> - Open/Close App Window
      </li>
      <li>
        press <span className="text-purple-400">up arrow / down arrow</span> -
        Select history commands
      </li>
      <li>
        press <span className="text-purple-400">tab</span> - Auto complete
      </li>
    </ul>
  )
}
const CommandNotFound: React.FC<{ command: string }> = ({ command }) => {
  return (
    <div className='flex w-full h-6'>
      <span className="mr-2 text-red-400">zsh: command not found: <span className='text-purple-400'>{command}</span></span>
    </div>
  )
}

export { CommandNotFound, Help, Row }
