'use client'
import React, { useEffect, useRef } from 'react'
import type { MotionValue } from 'framer-motion'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { AppsData } from 'types/configs/app'
import { useDockHoverAnimation } from '@/hooks'
import { useAlertStore, useAppsStore, useLaunchpadStore } from '@/store'
interface DockItemProps {
  app: AppsData
  mouseX: MotionValue
  openApp: (id: string) => void
  isOpen: (id: string) => boolean
  setShowLaunchpad: (v: boolean) => void
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
  const bannedApp = ['github', 'email']
  const show = useLaunchpadStore(s => s.show)
  const setShow = useLaunchpadStore(s => s.setShow)
  const removeMinimizeApps = useAppsStore(s => s.removeMinimizeApps)
  const miniMizeApps = useAppsStore(s => s.minimizeApps)
  const useAlert = useAlertStore(s => s.useAlert)
  let id: string
  useEffect(() => {
    id = { ...JSON.parse(localStorage.getItem('userInfo') as string) }.id
  }, [])

  const dockItemClick = () => {
    if (app.id === 'launchpad') {
      setShow(!show)
    }
    else if (!bannedApp.includes(app.id)) {
      const isMinimize = miniMizeApps.includes(app.id)
      if (isMinimize) {
        removeMinimizeApps(app.id)
        return
      }
      if (app.id === 'turbochat')
        id ? openApp('turbochat') : openApp('login')
      else openApp(app.id)
    }
    else if (app.id === 'email') {
      useAlert('info', '个人邮箱: luorom001@gmail.com', 6000)
    }
  }

  return (
    <>
      {app.id !== 'login'
        && <li
          id={`dock-${app.id}`}
          onClick={dockItemClick}
          className="flex flex-col items-center justify-end mb-1 transition duration-150 ease-in origin-bottom"
        >
          <p className="absolute px-3 py-1 text-sm text-black rounded-md tooltip bg-gray-300/80">
            {app.title}
          </p>
          {app.link
            ? (
              <Link href={app.link} target="_blank" rel="noreferrer">
                <motion.img
                  className="w-12 rounded-md appLink"
                  ref={imgRef}
                  src={app.img}
                  alt={app.title}
                  title={app.title}
                  draggable={false}
                  style={{ width, willChange: 'width' }}
                />
              </Link>)
            : (
              <motion.img
                className="w-12 rounded-md appLink"
                ref={imgRef}
                src={app.img}
                alt={app.title}
                title={app.title}
                draggable={false}
                style={{ width, willChange: 'width' }}
              />)}
          <div className={`h-1 w-1 m-0 rounded-full bg-white/40 ${(isOpen(app.id) || bannedApp.includes(app.id)) ? '' : 'invisible'}`} />
        </li>
      }
    </>

  )
}

export default DockItem
