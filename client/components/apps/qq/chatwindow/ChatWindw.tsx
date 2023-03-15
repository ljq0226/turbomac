'use client'
import React, { useContext } from 'react'

import ChatMessage from './ChatMessage'
import ChatSent from './ChatSent'
import GroupAnnouncement from './GroupAnnouncement'
import GroupMembers from './GroupMembers'
import WindowHeader from './WindowHeader'
import ThemeContext from '@/components/ThemeContext'

const ChatWindw = () => {
  const { dark } = useContext(ThemeContext)

  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f2f2f2]'
  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'

  return (
    <div className={`flex flex-col flex-1 select-none ${bg}`}>
      <WindowHeader dark={dark} />
      <div className="flex flex-1">
        <div className={`flex flex-col flex-1 ${bg}`}>
          <ChatMessage dark={dark} />
          <ChatSent dark={dark} />
        </div>
        <div className={`flex flex-col w-[177px] border ${border}`}>
          <GroupAnnouncement dark={dark} />
          <GroupMembers dark={dark} />
        </div>
      </div>
    </div>
  )
}

export default ChatWindw
