import React from 'react'
import { shallow } from 'zustand/shallow'

import Topbar from '../components/topbar/Topbar'
import Launchpad from '../components/desktop/Launchpad'
import { wallpapers } from '@/lib'
import { themeStore } from '@/store'
import useMouseCorner from '@/hooks/useMouseCorner'
import Dock from '@/components/desktop/Dock'

interface Props {
  title?: string
  children?: any
}

const Desktop: React.FC<Props> = ({ title, children }) => {
  const [dark, brightness] = themeStore(s => [s.dark, s.brightness], shallow)

  const handleMouseCorner = (show: boolean) => { }

  useMouseCorner(handleMouseCorner)
  // const [primaryColor, setPrimaryColor] = useLocalStorage('primary-color', '#daa')
  return (
    <div
      className="flex w-full h-full overflow-hidden bg-center bg-cover felx-column"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
        filter: `brightness( ${(brightness as number) * 0.7 + 50}% )`,
      }}
    >
      {/* Topbar */}
      <Topbar></Topbar>

      {children}

      {/* LaunchPad */}
      <Launchpad></Launchpad>
      {/* Dock */}
      <Dock></Dock>
    </div>
  )
}

export default Desktop
