'use client'
import React, { useEffect, useRef, useState } from 'react'
import type { DragOptions } from '@neodrag/react'
import { useDraggable } from '@neodrag/react'
// import TrafficLight from './TrafficLight'
import TrafficHeader from './TrafficLight'
import { useWindowSize } from '@/hooks/useWindowSize'
import type { AppsData } from '@/types/app'
import { cn } from '@/lib/utils'

const minMarginY = 32
const minMarginX = 100

interface WindowProps {
  app: AppsData
  closeApp: (id: string) => void
  children: React.ReactNode
}

interface WindowState {
  width: number
  height: number
  x: number
  y: number
}

const Window = ({ app, children, closeApp }: WindowProps) => {
  const { winWidth, winHeight } = useWindowSize()
  const [box, setBox] = useState({
    width: 0,
    height: 0,
  })
  const [position, setPosition] = useState({
    x: Math.random() * (winWidth - box.width),
    y: Math.random() * (winHeight - box.height),
  })
  useEffect(() => {
    setBox({
      width: Math.min(winWidth, app.width ? app.width : 640),
      height: Math.min(winHeight, app.height ? app.height : 400),
    })
  }, [])

  const draggableRef = useRef(null)
  const options: DragOptions = {
    position,
    onDrag: ({ offsetX, offsetY }) => setPosition({ x: offsetX, y: offsetY }),
    bounds: { bottom: -6000, top: 32, left: -6000, right: -6000 },
    handle: '.window-header',
    cancel: '.traffic-lights',
  }
  useDraggable(draggableRef, options)

  const max = false
  const min = false

  const round = max ? 'rounded-none' : 'rounded-xl'
  const minimized = min
    ? 'opacity-0 invisible transition-opacity duration-300'
    : ''
  const border = max ? '' : 'border border-gray-500/30'
  // const width = max ? winWidth : state.width
  // const height = max ? winHeight : state.height

  return (

    <div ref={draggableRef} className={cn('bg-black relative z-5', round)}
      style={{ width: `${box.width}px`, height: `${box.height}px` }}
    >
      <header className='bg-[#383837] h-7  window-header rounded-t-xl'>
        <TrafficHeader max={max} id={app.id} closeApp={closeApp} />
      </header>
      <div className='w-full h-full bg-red-300'>
        {children}
      </div>

    </div>

  )
}

export default Window
