'use client'
import React, { Suspense } from 'react'
import {
  ArrowLeftRight,
  Wifi,
  WifiOff,
} from 'lucide-react'
import { shallow } from 'zustand/shallow'
import Image from 'next/image'
import Applemenu from '../menu/Applemenu'
import WifiMenu from '../menu/WifiMenu'
import ControlCenter from './ControlCenter/ControlCenter'
import TopbarItem from './TopbarItem'
import CurrentDate from './CurrentDate'
import Battery from './Battery'
import ThemeContext from './ThemeContext'
import { useAppsStore, useControlStore, useThemeStore } from '@/store'

const Topbar = () => {
  const [dark, setDark, brightness, setBrightness, sound, setSound]
    = useThemeStore(
      state => [
        state.dark,
        state.setDark,
        state.brightness,
        state.setBrightness,
        state.sound,
        state.setSound,
      ],
      shallow,
    )

  const [
    wifi,
    wifiSwitch,
    showWifiMenu,
    wifiMenuSwitch,
    showAppleMenu,
    appleMenuSwitch,
    showControlCenter,
    controlCenterSwitch,
  ] = useControlStore(
    state => [
      state.wifi,
      state.wifiSwitch,
      state.showWifiMenu,
      state.wifiMenuSwitch,
      state.showAppleMenu,
      state.appleMenuSwitch,
      state.showControlCenter,
      state.controlCenterSwitch,
    ],
    shallow,
  )
  const max = useAppsStore(s => s.max)

  return (
    <ThemeContext.Provider value={{ dark, brightness }}>
      {
        !max && <div
          className={`w-full h-8 px-2  top-0  z-50 text-sm backdrop-blur-2xl shadow transition select-none
       flex justify-between font-medium ${dark ? 'text-white  bg-gray-500/20 ' : 'text-black  bg-gray-700/10'
            }`}
        >
          {/* Apple Icon  */}
          <div
            className=" flex justify-center w-[30px] items-center  relative  hover:bg-gray-400 "
            onClick={() => {
              appleMenuSwitch(true)
            }}
          >
            {/* Apple Menu Switch */}
            <TopbarItem
              Icon={<Image alt="" width={300} height={300} src={`${dark ? '/img/icons/apple-white.png' : '/img/icons/apple-black.png'}`}
              />
              }
            />
            {showAppleMenu && <Applemenu appleMenuSwitch={appleMenuSwitch} />}
          </div>
          {/* flex empty block */}
          <div className="flex-1"></div>
          {/* right icons list  */}
          <div className="flex items-center justify-end h-full space-x-2 ">
            <div className="relative">
              {wifi
                ? (
                  <TopbarItem
                    clickHandler={wifiMenuSwitch}
                    value={showWifiMenu}
                    Icon={<Wifi size={16} color={dark ? '#fff' : '#000'} />}
                  />)
                : (
                  <TopbarItem
                    clickHandler={wifiMenuSwitch}
                    value={showWifiMenu}
                    Icon={<WifiOff size={16} color={dark ? '#fff' : '#000'} />}
                  />)}
              {showWifiMenu && (
                <WifiMenu
                  wifi={wifi}
                  wifiSwitch={wifiSwitch}
                  wifiMenuSwitch={wifiMenuSwitch}
                  dark={dark}
                />
              )}
            </div>
            <Battery />
            <div className="relative">
              <TopbarItem
                clickHandler={controlCenterSwitch}
                value={showControlCenter}
                Icon={<ArrowLeftRight size={16} color={dark ? '#fff' : '#000'} />}
              />
              {showControlCenter && (
                <ControlCenter
                  dark={dark}
                  setDark={setDark}
                  brightness={brightness}
                  setBrightness={setBrightness}
                  sound={sound}
                  setSound={setSound}
                  controlCenterSwitch={controlCenterSwitch}
                />
              )}
            </div>
            <Suspense fallback={<div>loading...</div>}>
              <CurrentDate />
            </Suspense>
          </div>
        </div>

      }
    </ThemeContext.Provider>

  )
}

export default Topbar
