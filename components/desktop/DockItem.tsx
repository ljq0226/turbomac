import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useDockHoverAnimation, useWindowSize } from '@/hooks'

interface DockItemProps {
  id: string
  title: string
  img: string
  mouseX: MotionValue
  desktop: boolean
  openApp: (id: string) => void
  isOpen: boolean
  link?: string
  dockSize: number
  dockMag: number
}
const DockItem = ({
  id,
  title,
  img,
  mouseX,
  desktop,
  openApp,
  isOpen,
  link,
  dockSize,
  dockMag,
}: DockItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const { width } = useDockHoverAnimation(mouseX, imgRef, dockSize, dockMag)
  const { winWidth } = useWindowSize()

  return (
    <li
      id={`dock-${id}`}
      onClick={(desktop || id === 'launchpad') ? () => openApp(id) : () => { }}
      className="flex flex-col items-center justify-end mb-1 transition duration-150 ease-in origin-bottom"
    >
      <p className="absolute px-3 py-1 text-sm text-black rounded-md tooltip bg-gray-300/80">
        {title}
      </p>
      {link
        ? (
          <a href={link} target="_blank" rel="noreferrer">
            <motion.img
              className="w-12 rounded-md"
              ref={imgRef}
              src={img}
              alt={title}
              title={title}
              draggable={false}
              style={winWidth < 640 ? {} : { width, willChange: 'width' }}
            />
          </a>)
        : (
          <motion.img
            className="w-12 rounded-md"
            ref={imgRef}
            src={img}
            alt={title}
            title={title}
            draggable={false}
            style={winWidth < 640 ? {} : { width, willChange: 'width' }}
          />)}
      <div
        className={`h-1 w-1 m-0 rounded-full c-bg-800 ${isOpen ? '' : 'invisible'
          }`}
      />
    </li>
  )
}

export default DockItem
