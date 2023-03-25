import type { Dispatch, SetStateAction } from 'react'
import React, { useContext, useRef } from 'react'
import type { ActiveUser, Message } from 'types'
import ChatMessage from './message/ChatMessage'
import ChatSent from './message/ChatSent'
import WindowHeader from './ChatHeader'
import ThemeContext from '@/components/ThemeContext'

interface Props {
  messages: Message[]
  activeUsers: ActiveUser[]
  sentFlag: boolean
  page: number
  setMessages: Dispatch<SetStateAction<Message[]>>
  setSentFlag: Dispatch<SetStateAction<boolean>>
  setPage: Dispatch<SetStateAction<number>>
}

const ChatWindw = ({ messages, setMessages, sentFlag, setSentFlag, page, setPage, activeUsers }: Props) => {
  const { dark } = useContext(ThemeContext)
  const windowRef = useRef<HTMLDivElement | null>(null)
  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f2f2f2]'

  return (
    <div ref={windowRef} className={`flex flex-col flex-1 select-none ${bg}`}>
      <WindowHeader dark={dark} activeUsers={activeUsers} />
      <div className={`flex flex-col flex-1 overflow-hidden ${bg} pl-3 pr-2`}>
        <ChatMessage windowRef={windowRef} dark={dark} messages={messages} setMessages={setMessages} sentFlag={sentFlag} page={page} setPage={setPage} />
        <ChatSent dark={dark} setSentFlag={setSentFlag} sentFlag={sentFlag} page={page} />
      </div>
    </div>
  )
}

export default ChatWindw
