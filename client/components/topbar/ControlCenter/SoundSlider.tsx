import React from 'react'
import { Headphones } from 'lucide-react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

interface Props {
  sound: number
  setSound: (v: number) => void
}

const SoundSlider = ({ sound, setSound }: Props) => {
  return (
    <div className="flex flex-col p-2 my-2 rounded-[13px] bg-white/50">
      <div className="flex w-full slider">
        <div className="flex items-center justify-center bg-gray-100 border-gray-300 rounded-l-full w-7 h-7">
          <Headphones size={16} color="black" />
        </div>
        <Slider
          min={1}
          max={100}
          value={sound}
          tooltip={false}
          orientation="horizontal"
          onChange={(v: number) => setSound(v)}
          className="w-full"
          trackClassName="bg-gray-300"
          thumbClassName="w-6 h-6 bg-white border-2 border-gray-300 rounded-full shadow-md"
        />
      </div>
    </div>
  )
}

export default SoundSlider
