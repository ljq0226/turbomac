'use client'
import React, { useEffect, useState } from 'react'
import type { ActiveUser, Message, UserInfo } from 'types'
import ChatList from './chatlist/ChatList'
import ChatWindw from './chatwindow/ChatWindow'
import SideBar from './siderbar/SiderBar'
import UserInfoContext from './UserInfoContext'
import ThemeContext from '@/components/ThemeContext'
import { useThemeStore } from '@/store'
import { socket } from '@/lib'

const TurboChat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [activeUsers, setActiveUsers] = useState<ActiveUser[]>([])

  // judge the new message is or not sent by you
  const [sentFlag, setSentFlag] = useState<boolean>(false)
  const dark = useThemeStore(s => s.dark)
  const [userInfo, setUserInfo] = useState<UserInfo>({})
  const [page, SetPage] = useState<number>(1)
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem('userInfo') as string))
  }, [])
  useEffect(() => {
    socket.connect()
    socket.on('connect', () => {
    })
    socket.on('getMessages', (data) => {
      if (data)
        setMessages(data)
    })
    socket.on('onlineUsers', (data) => {
      if (data)
        setActiveUsers(data)
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
        <UserInfoContext.Provider value={{ ...userInfo }}>
          <div className='flex h-full backdrop-blur-sm'>
            <SideBar dark={dark} />
            <ChatList />
            {flag
              ? <ChatWindw messages={messages} setMessages={setMessages} sentFlag={sentFlag} setSentFlag={setSentFlag} page={page} setPage={SetPage} activeUsers={activeUsers} />
              : <div className={`flex-1 flex-center ${bg}`}>
                <img className='w-[140px] h-[140px]' src={src} alt="123" />
              </div>
            }
          </div>
        </UserInfoContext.Provider>
      </ThemeContext.Provider >

    </>

  )
}

export default React.memo(TurboChat)
