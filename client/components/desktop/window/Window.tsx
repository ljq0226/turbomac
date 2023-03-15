'use client'
import React, { useEffect, useRef, useState } from 'react'
import type { DragOptions } from '@neodrag/react'
import { useDraggable } from '@neodrag/react'
import { shallow } from 'zustand/shallow'
import { useLocalStorageState } from 'ahooks'
import { motion } from 'framer-motion'
import TrafficHeader from './TrafficLight'
import { useWindowSize } from '@/hooks'
import type { AppsData } from '@/types/app'
import { cn } from '@/lib/utils'
import { useAppsStore } from '@/store'
interface WindowProps {
  app: AppsData
  children: React.ReactNode
}

const Window = ({ app, children }: WindowProps) => {
  const { winWidth, winHeight } = useWindowSize()
  // check if to be phone mode
  const isRotate = winWidth < 767
  const [max, setMax, focus, setFocus] = useAppsStore(s => [s.max, s.setMax, s.focus, s.setFocus], shallow)
  const [box, setBox] = useState({
    width: 0,
    height: 0,
  })
  const [position, setPosition] = useState({
    x: max ? 0 : ((isRotate ? winHeight : winWidth) * (Math.random() * 0.2 + 0.05)),
    y: max ? 0 : ((isRotate ? winWidth : winHeight) * (Math.random() * 0.2 + 0.05)),
  })

  const [lastPositon, setLastPositon] = useLocalStorageState('LAST_POSITION', { defaultValue: position })

  const handleMax = () => {
    setMax(app.id)
    setBox({ width: (isRotate ? winHeight : winWidth), height: (isRotate ? winWidth : winHeight) })
    setLastPositon(position)
    setPosition({ x: 0, y: 0 })
  }
  const handleMini = () => {
    setMax('')
    setBox({ width: Math.min(winWidth, app.width ? app.width : 540), height: Math.min(winHeight, app.height ? app.height : 450) })
    setPosition(lastPositon)
  }

  useEffect(() => {
    setBox({
      width: max ? winWidth : Math.min(winWidth, app.width ? app.width : 540),
      height: max ? winHeight : Math.min(winHeight, app.height ? app.height : 450),
    })
  }, [])

  const draggableRef = useRef(null)

  // init dragable
  const options: DragOptions = {
    position,
    onDrag: ({ offsetX, offsetY }) => setPosition({ x: isRotate ? offsetY : offsetX, y: isRotate ? offsetX : offsetY }),
    bounds: { bottom: -500, top: 32, left: -600, right: -600 },
    handle: '.window-header',
    cancel: '.traffic-lights',
    disabled: !!max,
  }
  useDraggable(draggableRef, options)
  const ZINDEX = 15

  return (

    <motion.div ref={draggableRef} className={cn('absolute rounded-xl')}
      style={{
        width: `${box.width}px`,
        height: `${box.height}px`,
        zIndex: max ? 100 : (focus === app.id) ? ZINDEX + 1 : ZINDEX,
      }}
      onClick={() => setFocus(app.id)}
    >
      <motion.header
        className='absolute z-10 flex w-full bg-transparent h-7 window-header rounded-t-xl'
        onDoubleClick={max ? handleMini : handleMax}
        initial={{ opacity: 0.3, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <TrafficHeader id={app.id} handleMax={handleMax} handleMini={handleMini} />
      </motion.header>

      <motion.div className='relative w-full h-full'
        initial={{ opacity: 0.3, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}>
        {children}
      </motion.div>

    </motion.div>

  )
}

export default Window
