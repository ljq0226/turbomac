'use client'
import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { wallpapers } from '@/lib'
import { useLaunchpadStore, useThemeStore } from '@/store'
import useMouseCorner from '@/hooks/useMouseCorner'
import launchpadApps from '@/lib/launchpad'
const Launchpad: React.FC = () => {
  const show = useLaunchpadStore(s => s.show)
  const setShow = useLaunchpadStore(s => s.setShow)
  const dark = useThemeStore(s => s.dark)
  const [focus, setFocus] = useState(false)
  const [searchText, setSearchText] = useState('')
  const search = () => {
    if (searchText === '')
      return launchpadApps
    const text = searchText.toLowerCase()
    const list = launchpadApps.filter((item) => {
      return (
        item.title.toLowerCase().includes(text)
        || item.id.toLowerCase().includes(text)
      )
    })
    return list
  }

  const close = show
    ? ''
    : 'opacity-0 invisible transition-opacity duration-200'

  useMouseCorner((show: boolean) => { })

  return (
    <div
      className={`${close} z-[100] transform scale-110 w-full h-full fixed overflow-hidden bg-center bg-cover`}
      id="launchpad"
      style={{
        backgroundImage: `url(${dark ? wallpapers.github : wallpapers.vallay})`,
      }}
      onClick={() => setShow(false)}
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
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
        <div className='<div className=“max-w-[1100px] mx-auto mt-8 w-full px-4 sm:px-10 grid grid-flow-row grid-cols-4 sm:grid-cols-7” >'>
          {search().map(app => (
            <div
              key={`launchpad-${app.id}`}
              className="w-full h-32 sm:h-36 flex-center"
            >
              <div className="flex flex-col w-full h-full">
                <a
                  className="h-max"
                  href={app.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                >
                  <img
                    className="mx-auto w-14 sm:w-20"
                    src={app.img}
                    alt={app.title}
                    title={app.title}
                  />
                </a>
                <span className="mx-auto mt-2 text-xs text-white sm:text-sm">
                  {app.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Launchpad
