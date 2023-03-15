import React, { useRef } from 'react'
import { useClickAway } from 'ahooks'
interface ContextMenuProps {
  setMenuStyle: (value: boolean) => void
  pagePosition: {
    pageX: number
    pageY: number
  }
}

const ContextMenu = ({ setMenuStyle, pagePosition }: ContextMenuProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useClickAway(() => setMenuStyle(false), ref)
  return (
    <div
      ref={ref}
      className={'absolute  text-black rounded-md context-menu font-md h-70 w-52 bg-white/70 '}
      style={{ left: `${pagePosition.pageX}px`, top: `${pagePosition.pageY}px` }}
      onClick={() => setMenuStyle(false)}
    >
      <ul className="p-1">
        <li className="appleMenuItem">New Folder</li>
        <div className="menuDivider"></div>
        <li className="appleMenuItem">Get Info</li>
        <li className="appleMenuItem">Change Wallpaper...</li>
        <div className="menuDivider"></div>
        <li className="appleMenuItem">Use Stacks</li>
        <li className="appleMenuItem">Sort By</li>
        <li className="appleMenuItem">Clean Up</li>
        <li className="appleMenuItem">Clean Up By</li>
        <li className="appleMenuItem">Show View Options</li>
      </ul>
    </div>
  )
}

export default ContextMenu
