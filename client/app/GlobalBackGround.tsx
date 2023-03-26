'use client'
import React, { useEffect, useRef, useState } from 'react'
import { shallow } from 'zustand/shallow'
import ContextMenu from '../components/menu/ContextMenu'
import { useAlertStore, useThemeStore } from '@/store'
import { wallpapers } from '@/lib'
import AlertMessage from '@/components/ui/alert/AlertMessage'

const GlobalBackGround = ({ children }: { children: React.ReactNode }) => {
  const [brightness] = useThemeStore(s => [s.brightness], shallow)
  const useAlert = useAlertStore(s => s.useAlert)
  const [menu, setMenuStyle] = useState(false)
  const [pagePosition, setPagePosition] = useState({
    pageX: -999,
    pageY: -999,
  })
  const bgRef = useRef(null)
  const contextMenu = (e: MouseEvent) => {
    setMenuStyle(true)
    setPagePosition({ pageX: e.pageX, pageY: e.pageY })
  }

  useEffect(() => {
    useAlert('success', 'Welcome to the TurboMac!')
    // 禁用window区域右键默认菜单弹窗
    window.oncontextmenu = function (e) {
      e.preventDefault()
    }
    const desktop: any = bgRef.current
    desktop.addEventListener('contextmenu', contextMenu)
    return () => {
      desktop.removeEventListener('contextmenu', contextMenu)
    }
  }, [])
  return (
    <div
      className="relative flex flex-col w-full h-full overflow-hidden bg-center bg-cover"
      ref={bgRef}
      style={{
        backgroundImage: `url(${wallpapers.github})`,
        filter: `brightness( ${(brightness as number) * 0.7 + 50}%)`,
      }}
    >
      <AlertMessage />
      {children}
      {menu && <ContextMenu setMenuStyle={setMenuStyle} pagePosition={pagePosition} />}
    </div>
  )
}

export default GlobalBackGround
