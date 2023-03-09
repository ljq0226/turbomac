import React from 'react'
import ChatList from './chatlist/ChatList'
import ChatWindw from './chatwindow/ChatWindw'
import SideBar from './siderbar/SiderBar'
const QQ = () => {
  const flag = true
  return (
    <div className='flex h-full bg-[#262626] backdrop-blur-sm'>
      <SideBar />

      <ChatList />
      {flag
        ? <ChatWindw />
        : <div className='flex-center flex-1 bg-[#1a1a1a]/95'>
          <img className='w-[140px] h-[140px]' src="/logo/qq3.svg" alt="123" />
        </div>
      }

    </div>
  )
}

export default QQ
