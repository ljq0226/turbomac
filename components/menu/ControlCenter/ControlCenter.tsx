import React, { useRef } from 'react'
import { useClickAway } from 'ahooks'
import ThemeMode from './ThemeMode'
import FocusMode from './FocusMode'
import BrightnessSlider from './BrightnessSlider'
import SoundSlider from './SoundSlider'
interface ControlCenterProps {
  dark: boolean
  brightness: number
  sound: number
  setBrightness: (value: number) => void
  setSound: (value: number) => void
  setDark: (value: boolean) => void
  controlCenterSwitch: (value: boolean) => void
}

const ControlCenter = ({
  dark,
  setDark,
  brightness,
  setBrightness,
  sound,
  setSound,
  controlCenterSwitch,
}: ControlCenterProps) => {
  const bg = dark ? 'bg-[#2d3440]/90 border-gray-500' : 'bg-white/50'
  const ref = useRef<HTMLDivElement>(null)
  useClickAway(() => controlCenterSwitch(false), ref)
  return (
    <div
      className={`absolute p-3  rounded-[13px] w-80 h-96 top-7 -left-44 flex flex-col shadow ${dark ? 'bg-[#1a2133]/90 ' : 'bg-white/40'
        }`}
      ref={ref}
    >
      <div className="flex w-full ">
        <div
          className={`flex mr-3 rounded-[13px] border  shadow w-40 h-36 ${bg}`}
        >

        </div>

        <div className="flex flex-col w-40 h-3 space-y-3 shadow">
          {/* Change Mode */}

          <ThemeMode bg={bg} dark={dark} setDark={setDark} />
          <FocusMode bg={bg} dark={dark} />

        </div>
      </div>
      {/* Display */}
      <BrightnessSlider brightness={brightness} setBrightness={setBrightness} />
      {/* Sound */}
      <SoundSlider sound={sound} setSound={setSound} />
    </div>
  )
}

const Base = () => {
  return <div>asd</div>
}

export default ControlCenter
