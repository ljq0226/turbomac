import React, { useRef } from 'react'
import { useClickAway } from 'ahooks'
interface ApplemenuProps {
  appleMenuSwitch: (value: boolean) => void
}

const Applemenu = ({ appleMenuSwitch }: ApplemenuProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useClickAway(() => appleMenuSwitch(false), ref)
  return (
    <div
      ref={ref}
      className={'absolute text-black rounded-md cursor-pointer font-md h-70 w-52 bg-white/70 top-9 left-1'}
      onClick={() => {
        appleMenuSwitch(false)
      }}
    >
      <ul className="p-1" >
        <li className="appleMenuItem">About This Mac</li>
        <div className="menuDivider"></div>
        <li className="appleMenuItem">Systeam Prefrences...</li>
        <li className="appleMenuItem">Apple Store...</li>
        <div className="menuDivider"></div>
        <li className="appleMenuItem">Recent Items</li>
        <div className="menuDivider"></div>
        <li className="appleMenuItem">Force Quit...</li>
        <div className="menuDivider"></div>
        <li className="appleMenuItem">Sleep</li>
        <li className="appleMenuItem">Restart...</li>
        <li className="appleMenuItem">Shut Down...</li>
        <div className="menuDivider"></div>
        <li className="appleMenuItem">Lock Screen</li>
        <li className="appleMenuItem">Log Out...</li>
      </ul>
    </div>
  )
}

export default Applemenu
