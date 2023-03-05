'use client'
import React, { useState } from 'react'
import { Search } from 'lucide-react'
import Image from 'next/image'
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
      className={`${close} z-[100] transform scale-110 w-full h-full fixed  bg-center bg-cover`}
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
        <div className='flex w-full h-full launchpad'>
          <div className={'h-full bg-red-500 basis-1/16'} />
          <div className="flex flex-wrap h-auto basis-7/8">
            {search().map(app => (
              <div key={`launchpad-${app.id}`} className="flex flex-col w-[1/8]">
                <a href={app.link}>
                  <Image src={app.img} width={30} height={30} className='w-1/2 h-1/2' alt={app.title} />
                </a>
              </div>
            ))}
          </div>
          <div className={'h-full bg-green-500 basis-1/16'} />
        </div>
      </div>
    </div >
  )
}

export default Launchpad
