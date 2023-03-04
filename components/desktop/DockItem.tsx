import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useDockHoverAnimation, useWindowSize } from '@/hooks'
import type { AppsData } from '@/types/app'
interface DockItemProps {
  app: AppsData
  mouseX: MotionValue
  openApp: (id: string) => void
  isOpen: (id: string) => boolean
  dockSize: number
  dockMag: number
}
const DockItem = ({
  app,
  mouseX,
  openApp,
  dockSize,
  dockMag,
  isOpen,
}: DockItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const { width } = useDockHoverAnimation(mouseX, imgRef, dockSize, dockMag)
  const { winWidth } = useWindowSize()

  return (
    <li
      id={`dock-${app.id}`}
      onClick={(app.id !== 'launchpad') ? () => openApp(app.id) : () => { }}
      className="flex flex-col items-center justify-end mb-1 transition duration-150 ease-in origin-bottom"
    >
      <p className="absolute px-3 py-1 text-sm text-black rounded-md tooltip bg-gray-300/80">
        {app.title}
      </p>
      {app.link
        ? (
          <a href={app.link} target="_blank" rel="noreferrer">
            <motion.img
              className="w-12 rounded-md"
              ref={imgRef}
              src={app.img}
              alt={app.title}
              title={app.title}
              draggable={false}
              style={winWidth < 640 ? {} : { width, willChange: 'width' }}
            />
          </a>)
        : (
          <motion.img
            className="w-12 rounded-md"
            ref={imgRef}
            src={app.img}
            alt={app.title}
            title={app.title}
            draggable={false}
            style={winWidth < 640 ? {} : { width, willChange: 'width' }}
          />)}
      <div className={`h-1 w-1 m-0 rounded-full bg-white/40 ${isOpen(app.id) ? '' : 'invisible'}`} />
    </li>
  )
}

export default DockItem
