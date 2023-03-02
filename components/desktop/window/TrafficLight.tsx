'use client'
import React from 'react'
import { Maximize2, Minimize2, Minus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
interface TrafficProps {
  id: string
  max: boolean
  setMax: (id: string, target?: boolean) => void
  setMin: (id: string) => void
  close: (id: string) => void
}

const TrafficHeader = ({ id, close, max, setMax, setMin }: TrafficProps) => {
  const closeWindow = (e: React.MouseEvent | React.TouchEvent): void => {
    e.stopPropagation()
    close(id)
  }
  const buttonCn = 'rounded-full  flex-center w-[12px] h-[12px]'
  const iconCn = ''

  return (
    <div className="flex flex-row absolute left-0 space-x-2 pl-2 mt-2.5 cursor-auto">
      <div
        className={cn('bg-red-500', buttonCn)}
        onClick={closeWindow}
        onTouchEnd={closeWindow}
      >
        <X size={10} color='black' className={iconCn} />
      </div>
      <div
        className={cn('bg-yellow-500', buttonCn)}
        onClick={() => setMin(id)}
        onTouchEnd={() => setMin(id)}
      >
        <span>
          <Minus size={10} color='black' className={iconCn} />
        </span>

      </div>
      <div
        className={cn('bg-green-500', buttonCn)}
        onClick={() => setMax(id)}
        onTouchEnd={() => setMax(id)}
      >
        {max ? <Minimize2 size={10} color='black' className={iconCn} /> : <Maximize2 size={10} color='black' className={iconCn} />}
      </div>
    </div>
  )
}

export default TrafficHeader
