'use client'
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { cn } from '@/lib/utils'
interface Props {
  dark: boolean
  bg: string
  brightness: number
  setBrightness: (v: number) => void
}
const FocusMode = ({ dark, bg, brightness, setBrightness }: Props) => {
  const [state, setState] = useState(false)
  const clickHandler = () => {
    setState(!state)
    state ? setBrightness(brightness * 2) : setBrightness(brightness / 2)
  }

  return (
    <div
      className={`flex p-3 py-4 rounded-[13px] h-16 border shadow ${bg} `}
      onClick={clickHandler}
    >
      <div
        className={cn('flex-center w-8 h-8  text-center  rounded-full', state ? 'bg-primary' : 'bg-gray-200')}
      >
        {
          state
            ? <Eye size={16} color={state ? 'white' : 'black'} />
            : <EyeOff size={16} color={state ? 'white' : 'black'} />
        }
      </div>
      <h2
        className={`align-middle py-[5px] pl-2 whitespace-nowrap font-medium text-md ${dark ? 'text-white' : 'text-black'
          }`}
      >
        Eye Protection
      </h2>
    </div>
  )
}

export default FocusMode
