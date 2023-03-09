import React from 'react'
import ChatMessage from './ChatMessage'
import ChatSent from './ChatSent'
import GroupAnnouncement from './GroupAnnouncement'
import GroupMembers from './GroupMembers'
import WindowHeader from './WindowHeader'

const ChatWindw = () => {
  return (
    <div className='flex flex-col flex-1 bg-[#171717]/95 select-none'>
      <WindowHeader />
      <div className="flex flex-1">
        <div className='flex flex-col flex-1 bg-[#1a1a1a] '>
          <ChatMessage />
          <ChatSent />
        </div>
        <div className="flex flex-col w-[177px] border border-[#232323]">
          <GroupAnnouncement />
          <GroupMembers />
        </div>
      </div>
    </div>
  )
}

export default ChatWindw
