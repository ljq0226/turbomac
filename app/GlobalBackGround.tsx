'use client'
import React from 'react'
import { shallow } from 'zustand/shallow'
import { useThemeStore } from '@/store'
import { wallpapers } from '@/lib'

const GlobalBackGround = ({ children }: { children: React.ReactNode }) => {
  const [dark, brightness] = useThemeStore(s => [s.dark, s.brightness], shallow)
  return (
    <div
      className="flex flex-col w-full h-full overflow-hidden bg-center bg-cover felx-column"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
        filter: `brightness( ${(brightness as number) * 0.7 + 50}% )`,
      }}
    >
      {children}
    </div>
  )
}

export default GlobalBackGround
