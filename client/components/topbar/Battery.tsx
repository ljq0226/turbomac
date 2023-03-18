'use client'
import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../ThemeContext'
import { cn } from '@/lib/utils'

interface BatteryInfo {
  level: number
  charging: boolean
  setBattery: () => void
}

declare global {
  interface Navigator {
    getBattery(): Promise<BatteryInfo>
  }
}

const Battery = () => {
  const { dark } = useContext(ThemeContext)
  const [battery, setBattery] = useState<{ level: number; charging: boolean }>({
    level: 0,
    charging: false,
  })
  useEffect(() => {
    const navigator: Navigator = window.navigator
    navigator.getBattery().then((battery: BatteryInfo) => {
      setBattery({
        level: battery.level,
        charging: battery.charging,
      })
    })
  }, [])

  return (
    <div className='flex items-center px-1 rounded hover:bg-gray-400'>
      <div className='flex items-center w-[20px] h-3 border border-[#99979d] p-[1.5px]'>
        <div className={cn('h-full rounded-sm', (dark ? 'bg-white' : 'bg-black/40'), (battery.charging && 'bg-[#32d74b]/60'))}
          style={{ width: `${Math.floor(16 * battery.level)}px` }}
        />

      </div>
      <div className='w-0 h-0 m-0 border-[3px] border-l-solid  border-l-[#99979d] border-y-transparent border-r-transparent'></div>
      <div className='text-xs scale-90'>
        {`${battery.level * 100}%`}
      </div>
    </div>

  )
}

export default Battery
