'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Props {
  Icon?: any
  title: string
  src?: string
}

const FullScreenItem = ({ Icon, title, src }: Props) => {
  const [value, setValue] = useState(false)
  return (
    <div className='flex p-2 space-x-2 h-1/3'
      onClick={() => {
        value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
        setValue(!value)
      }}>
      <div className={cn('w-[2rem] h-[2rem] rounded-full flex-center', value ? 'bg-primary' : 'bg-gray-200')}>
        {src
          ? <Image width={300} height={300} src={src} alt='icon'></Image>
          : <Icon size={16} color={value ? 'white' : 'black'} />
        }
      </div>
      <div className='space-y-1 leading-3'>
        <p>{title}</p>
        <p>{value ? 'On' : 'Off'}</p>
      </div>
    </div>
  )
}

export default FullScreenItem
