import { useClickAway } from 'ahooks'
import React, { useRef } from 'react'
// import Switch from '../ui/Switch'

interface WifiMenuProps {
  dark: boolean
  wifi: boolean
  wifiMenuSwitch: (value: boolean) => void
  wifiSwitch: (value: boolean) => void
}

const WifiMenu = ({
  dark,
  wifi,
  wifiSwitch,
  wifiMenuSwitch,
}: WifiMenuProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useClickAway(() => wifiMenuSwitch(false), ref)

  return (
    <div
      ref={ref}
      className={`absolute w-56 h-10 px-4 flex justify-between items-center rounded-md -left-28 top-7 ${dark ? 'bg-black/40 text-white/80' : 'bg-white/80 text-black'
        }`}
    >
      <div className="font-medium ">Wi-Fi</div>
      {/* <Switch
        className=""
        checked={wifi}
        onCheckedChange={() => wifiSwitch(!wifi)}
      /> */}
    </div>
  )
}

export default WifiMenu
