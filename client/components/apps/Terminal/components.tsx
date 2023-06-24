import React from 'react'

interface RowProps {
  id: number
  onkeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
const Row: React.FC<RowProps> = ({ id, onkeydown }) => {
  const currentId = Number.parseInt(JSON.parse(localStorage.getItem('currentId') as string))
  const dir = localStorage.getItem('currentDirectory')
  return (
    <div className='flex flex-col w-full h-12'>
      <div>
        <span className="mr-2 text-yellow-400">funnycoder</span>
        <span className="mr-2 text-green-400">@macbook-pro</span>
        <span className="mr-2 text-blue-400">~{dir}</span>
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

function BottomBar() {
  const dir = localStorage.getItem('currentDirectory')
  return (
    <div className='flex p-1 space-x-2'>
      <div className='flex items-center justify-center text-[#dba4a2]'>
      <svg className="mx-1 icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3363" id="mx_n_1687598905384" width="16" height="16"><path d="M170.666667 85.333333l213.333333 0 85.333333 128 384 0q52.992 0 90.496 37.504t37.504 90.496l0 469.333333q0 52.992-37.504 90.496t-90.496 37.504l-682.666667 0q-52.992 0-90.496-37.504t-37.504-90.496l0-597.333333q0-52.992 37.504-90.496t90.496-37.504zM423.68 298.666667l-82.346667-128-170.666667 0q-17.664 0-30.165333 12.501333t-12.501333 30.165333l0 597.333333q0 17.664 12.501333 30.165333t30.165333 12.501333l682.666667 0q17.664 0 30.165333-12.501333t12.501333-30.165333l0-469.333333q0-17.664-12.501333-30.165333t-30.165333-12.501333l-429.653333 0z" p-id="3364" fill="#dba4a2"></path></svg>
      <span className=''>~</span>
      <p>{dir}</p>
      </div>
    </div>
  )
}
function Help() {
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
        <span className="text-purple-400">mkdir</span> - create a folder
      </li>
      <li>
        <span className="text-purple-400">touch</span> - create a file
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
const NoSuchFileOrDirectory: React.FC<{ command: string }> = ({ command }) => {
  return (
    <div className='flex w-full h-6'>
      <span className="mr-2 text-red-400">cd: no such file or directory:<span className='text-purple-400'>{command}</span></span>
    </div>
  )
}

export { CommandNotFound, NoSuchFileOrDirectory, Help, Row, BottomBar }
