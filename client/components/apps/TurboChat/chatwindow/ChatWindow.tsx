import React, { useContext, useRef } from 'react'
import ChatMessage from './message/ChatMessage'
import ChatSent from './message/ChatSent'
import WindowHeader from './ChatHeader'
import ThemeContext from '@/components/ThemeContext'

const ChatWindw = () => {
  const { dark } = useContext(ThemeContext)
  const windowRef = useRef<HTMLDivElement | null>(null)
  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f2f2f2]'

  return (
    <div ref={windowRef} className={`flex flex-col flex-1 select-none ${bg}`}>
      <WindowHeader />
      <div className={`flex flex-col flex-1 overflow-hidden ${bg} pl-3 pr-2`}>
        <ChatMessage windowRef={windowRef} dark={dark} />
        <ChatSent dark={dark} />
      </div>
    </div>
  )
}

export default ChatWindw
