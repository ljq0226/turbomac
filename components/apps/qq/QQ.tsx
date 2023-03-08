import React from 'react'
import ChatList from './chatlist/ChatList'
import ChatWindw from './chatwindow/ChatWindw'
import SideBar from './siderbar/SideBar'
const QQ = () => {
  return (
    <div className='flex h-full bg-[#262626] backdrop-blur-sm'>
      <SideBar />

      <ChatList />

      <ChatWindw />
    </div>
  )
}

export default QQ
