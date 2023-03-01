'use client'
import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { wallpapers } from '@/lib'
import { useLaunchpadStore, useThemeStore } from '@/store'
import useMouseCorner from '@/hooks/useMouseCorner'
const Launchpad = () => {
  const show = useLaunchpadStore(s => s.show)
  const setShow = useLaunchpadStore(s => s.setShow)
  const dark = useThemeStore(s => s.dark)
  const [focus, setFocus] = useState(false)
  const close = show
    ? ''
    : 'opacity-0 invisible transition-opacity duration-200'
  const handleMouseCorner = (show: boolean) => { }
  useMouseCorner(handleMouseCorner)
  useEffect(() => {
    const clickDesktopHandle = () => {
      setShow(false)
    }

    document.addEventListener('click', clickDesktopHandle)

    return () => {
      document.removeEventListener('click', clickDesktopHandle)
    }
  }, [show])

  return (
    <div
      className={`${close} z-30 transform scale-110 w-full h-full fixed overflow-hidden bg-center bg-cover`}
      id="launchpad"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
      }}
    >
      <div className="absolute w-full h-full bg-gray-900/20 backdrop-blur-2xl">
        {/* Search Input */}
        <div
          className="flex w-64 mx-auto mt-12 border rounded-md h-7 bg-gray-200/10 border-gray-200/30"
          onClick={e => e.stopPropagation()}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        >
          <div
            className={`${focus ? 'w-6 duration-200' : 'w-26 delay-250'
              } flex items-center justify-end `}
          >
            <span className="ml-1 text-white">
              <Search size={16} />
            </span>
          </div>
          <input
            className="flex-1 min-w-0 px-1 text-sm text-white bg-transparent no-outline"
            placeholder={'Search'}
            value={''}
          />
        </div>
        <div>app</div>
      </div>
      Dock
    </div>
  )
}

export default Launchpad
