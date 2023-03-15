import React from 'react'

const Help = () => {
  return (
    <ul className="list-disc ml-6 pb-1.5">
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

export default Help
