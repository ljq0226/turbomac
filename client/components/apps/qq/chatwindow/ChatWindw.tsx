import type { Dispatch, SetStateAction } from 'react'
import React, { useContext } from 'react'

import type { Message } from 'types'
import ChatMessage from './ChatMessage'
import ChatSent from './ChatSent'
import GroupAnnouncement from './GroupAnnouncement'
import GroupMembers from './GroupMembers'
import WindowHeader from './WindowHeader'
import ThemeContext from '@/components/ThemeContext'

interface Props {
  messages: Message[]
  setMessages: Dispatch<SetStateAction<Message[]>>
}

const ChatWindw = ({ messages, setMessages }: Props) => {
  const { dark } = useContext(ThemeContext)

  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f2f2f2]'
  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'

  return (
    <div className={`flex flex-col flex-1 select-none ${bg}`}>
      <WindowHeader dark={dark} />
      <div className="flex flex-1">
        <div className={`flex flex-col flex-1 ${bg}`}>
          <ChatMessage dark={dark} messages={messages} setMessages={setMessages} />
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
