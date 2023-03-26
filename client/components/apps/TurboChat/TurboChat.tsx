'use client'
import React, { useEffect } from 'react'
import { io } from 'socket.io-client'
import { shallow } from 'zustand/shallow'
import ChatList from './chatlist/ChatList'
import ChatWindw from './chatwindow/ChatWindow'
import SideBar from './siderbar/SiderBar'
import ThemeContext from '@/components/ThemeContext'
import { useChatStore, useSocketStore, useThemeStore, useUserStore } from '@/store'
const TurboChat = () => {
  const setMessages = useChatStore(s => s.setMessages)
  const setActiveUsers = useChatStore(s => s.setActiveUsers)
  const [socket, setSocket] = useSocketStore(s => [s.socket, s.setSocket], shallow)

  const dark = useThemeStore(s => s.dark)
  const setUserInfo = useUserStore(s => s.setUserInfo)
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
        <div className='flex h-full backdrop-blur-sm'>
          <SideBar dark={dark} />
          <ChatList />
          {socket !== null && socket !== undefined
            && <ChatWindw />
          }
        </div>
      </ThemeContext.Provider >

    </>

  )
}

export default React.memo(TurboChat)
