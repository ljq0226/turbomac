'use client'
import React from 'react'
import { useMotionValue } from 'framer-motion'
import DockItem from './DockItem'
import apps from '@/lib/apps'
import { useDockStore } from '@/store'
const Dock = () => {
  const dockSize = useDockStore(s => s.dockSize)
  const dockMag = useDockStore(s => s.dockMag)

  const openApp = (id: string) => {

  }
  const showApps = (id: string) => {

  }

  const mouseX = useMotionValue<number | null>(null)
  const hide = false
  return (
    <div
      className={`dock z-10 select-none w-full sm:w-max fixed left-0 right-0 mx-auto bottom-1 ${hide ? 'z-0' : 'z-50'
        } overflow-x-scroll sm:overflow-x-visible`}
    >
      <ul
        className="flex px-2 mx-auto space-x-2 bg-white rounded-none dock max-w-max backdrop-blur-2xl border-1 sm:rounded-xl border-c-border-400/40 bg-opacity-20 glass"
        style={{
          height: `${(dockSize as number) + 15}px`,
        }}
        onMouseMove={e => mouseX.set(e.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
      >
        {apps.map(app => (
          <DockItem
            key={`dock-${app.id}`}
            id={app.id}
            title={app.title}
            img={app.img}
            mouseX={mouseX}
            desktop={app.desktop}
            openApp={openApp}
            isOpen={app.desktop}
            link={app.link}
            dockSize={dockSize as number}
            dockMag={dockMag as number}
          />
        ))}
      </ul>
    </div>
  )
}

export default Dock
