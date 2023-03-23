'use client'
import React, { useEffect, useState } from 'react'
import type { Message } from 'types'
import ChatList from './chatlist/ChatList'
import ChatWindw from './chatwindow'
import SideBar from './siderbar/SiderBar'
import ThemeContext from '@/components/ThemeContext'
import { useThemeStore } from '@/store'
import { socket } from '@/lib'

const TurboChat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const dark = useThemeStore(s => s.dark)
  useEffect(() => {
    socket.connect()
    socket.on('connect', () => {
      // console.log('connect')
    })

    socket.on('getMessages', (data) => {
      if (data)
        setMessages(data)
    })

    socket.on('disconnect', () => {
      // do something
    })
    return () => {
      socket.disconnect()
    }
  }, [])
  const flag = true
  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f2f2f2]'
  const src = dark ? '/qq/logo/qq_dark.svg' : '/qq/logo/qq_.svg'
  return (
    <>
      <ThemeContext.Provider value={{ dark }}>
        <div className='flex h-full backdrop-blur-sm'>
          <SideBar dark={dark} />
          <ChatList />
          {flag
            ? <ChatWindw messages={messages} setMessages={setMessages} />
            : <div className={`flex-1 flex-center ${bg}`}>
              <img className='w-[140px] h-[140px]' src={src} alt="123" />
            </div>
          }
        </div>
      </ThemeContext.Provider >

    </>

  )
}

export default React.memo(TurboChat)