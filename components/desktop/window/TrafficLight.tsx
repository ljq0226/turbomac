'use client'
import { Maximize2, Minimize2, Minus, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
interface TrafficProps {
  id: string
  // openApp: (id: string) => void
  // closeApp: (id: string) => void
  max: boolean
}

const TrafficHeader = ({ id, max }: TrafficProps) => {
  const color = 'bg-red-500'
  const trafficLightRef = useRef(null)
  const [enter, setEnter] = useState(false)

  useEffect(() => {
    const trafficLight: any = trafficLightRef.current
    trafficLight.addEventListener('mouseenter', () => {
      setEnter(true)
    })
    trafficLight.addEventListener('mouseleave', () => {
      setEnter(false)
    })
    return () => {
      trafficLight.removeEventListener('mouseenter', () => {
        setEnter(true)
      })
      trafficLight.removeEventListener('mouseleave', () => {
        setEnter(false)
      })
    }
  }, [trafficLightRef])

  return (
    <div ref={trafficLightRef} className="traffic-lights relative flex space-x-2 w-[60px] ml-1 " >
      <div className="bg-red-500 w-[13px] h-[13px] mt-2 rounded-full ml-1">  </div>
      <div className="bg-yellow-500 w-[13px] h-[13px] mt-2 rounded-full ">  </div>
      <div className="bg-green-500 w-[13px] h-[13px] mt-2 rounded-full ">  </div>
      {
        enter
        && <div className='absolute flex mt-[9px]'>
          <X size={10} color='black' strokeWidth={2} className='-ml-[2px]' />
          <Minus size={10} color='black' strokeWidth={3} className='mx-[10px]' />
          {
            max
              ? <Minimize2 size={10} color='black' strokeWidth={2} className='ml-[1px]' />
              : <Maximize2 size={10} color='black' strokeWidth={2} className='ml-[1px]' />
          }

        </div>
      }

    </div>
  )
}

export default TrafficHeader
