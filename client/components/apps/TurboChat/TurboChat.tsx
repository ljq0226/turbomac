'use client'
import React, { useEffect, useState } from 'react'
import type { ActiveUser, Message, UserInfo } from 'types'
import { io } from 'socket.io-client'
import ChatList from './chatlist/ChatList'
import ChatWindw from './chatwindow/ChatWindow'
import SideBar from './siderbar/SiderBar'
import UserInfoContext from './UserInfoContext'
import ThemeContext from '@/components/ThemeContext'
import { useSocketStore, useThemeStore } from '@/store'

const TurboChat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [activeUsers, setActiveUsers] = useState<ActiveUser[]>([])
  const socket = useSocketStore(s => s.socket)
  const setSocket = useSocketStore(s => s.setSocket)

  // judge the new message is or not sent by you
  const [sentFlag, setSentFlag] = useState<boolean>(false)
  const dark = useThemeStore(s => s.dark)
  const [userInfo, setUserInfo] = useState<UserInfo>({})
  const [page, SetPage] = useState<number>(1)
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem('userInfo') as string))
    const id = { ...JSON.parse(localStorage.getItem('userInfo') as string) }.id
    const newSocket = io('http://localhost:80', {
      query: {
        id,
      },
    })
    setSocket(newSocket)
  }, [])
  useEffect(() => {
    if (socket) {
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
    }
  }, [socket])
  return (
    <>
      <ThemeContext.Provider value={{ dark }}>
        <UserInfoContext.Provider value={{ ...userInfo }}>
          <div className='flex h-full backdrop-blur-sm'>
            <SideBar dark={dark} />
            <ChatList />
            {socket !== null && socket !== undefined
              && <ChatWindw messages={messages} setMessages={setMessages} sentFlag={sentFlag} setSentFlag={setSentFlag} page={page} setPage={SetPage} activeUsers={activeUsers} />
            }
          </div>
        </UserInfoContext.Provider>
      </ThemeContext.Provider >

    </>

  )
}

export default React.memo(TurboChat)
