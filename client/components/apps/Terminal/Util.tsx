import React from 'react'

interface RowProps {
  id: number
  onkeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Row: React.FC<RowProps> = ({ id, onkeydown }) => {
  return (
    <div className='flex w-full h-6'>
      <span className="mr-2 text-yellow-400">guest</span>
      <span className="mr-2 text-green-400">@macbook-pro</span>
      <span className="mr-2 text-blue-400">~</span>
      <span className="mr-2 text-pink-400">$</span>
      <input
        type="text"
        id={`terminal-input-${id}`}
        autoFocus={true}
        className="flex-1 w-full px-1 text-white bg-transparent outline-none"
        onKeyDown={onkeydown}
      />
    </div>
  )
}

const Help = () => {
  return (
    <ul key={Math.random().toString()} className="list-disc ml-6 pb-1.5">
      <li>
        <span className="text-red-400">cat {'<file>'}</span> - See the content
        of {'<file>'}
      </li>
      <li>
        <span className="text-red-400">cd {'<dir>'}</span> - Move into
        {' <dir>'}, "cd .." to move to the parent directory, "cd" or "cd ~" to
        return to root
      </li>
      <li>
        <span className="text-red-400">ls</span> - See files and directories
        in the current directory
      </li>
      <li>
        <span className="text-red-400">clear</span> - Clear the screen
      </li>
      <li>
        <span className="text-red-400">help</span> - Display this help menu
      </li>
      <li>
        <span className="text-red-400">rm -rf /</span> - :)
      </li>
      <li>
        press <span className="text-red-400">up arrow / down arrow</span> -
        Select history commands
      </li>
      <li>
        press <span className="text-red-400">tab</span> - Auto complete
      </li>
    </ul>
  )
}
const CommandNotFound: React.FC<{ command: string }> = ({ command }) => {
  return (
    <div className='flex w-full h-6'>
      <span className="mr-2 text-red-400">zsh: command not found: {command}</span>
    </div>
  )
}

export { CommandNotFound, Help, Row }
