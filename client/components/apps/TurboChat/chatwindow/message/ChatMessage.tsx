'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useChatStore, useSocketStore } from 'store'
import { shallow } from 'zustand/shallow'
import LoadingSpinner from './LoadingSpinner'
import RenderMessage from './RenderMessage'
import { debounce } from '@/lib/utils'
interface Props {
  dark: boolean
  windowRef: React.MutableRefObject<HTMLDivElement | null>
}
const ChatMessage = ({ dark }: Props) => {
  const [messages, setMessages] = useChatStore(s => [s.messages, s.setMessages], shallow)
  const [page, setPage] = useChatStore(s => [s.page, s.setPage], shallow)
  const socket = useSocketStore(s => s.socket)
  const sentFlag = useChatStore(s => s.sentFlag)
  const [lastChangedIndex, setLastChangedIndex] = useState<number>(0)
  const [prevScrollTop, setPrevScrollTop] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const chatListRef = useRef(null)

  useEffect(() => {
    if (chatListRef.current) {
      const chatlist = chatListRef.current as HTMLDivElement
      setTimeout(() => {
        chatlist.scrollTop = 9999
        // setTimeout is because the message updating is beforer than chatlist scrolling
      }, 100)
    }
  }, [sentFlag])

  useEffect(() => {
    if (chatListRef.current && page > 0) {
      const chatlist = chatListRef.current as HTMLDivElement
      socket && socket.emit('getMessages', { page })
      setLoading(false)
      setTimeout(() => {
        chatlist.scrollTop = chatlist.scrollHeight - prevScrollTop
      }, 100)
    }
  }, [page])

  function addMessage() {
    const index = Math.floor(Math.random() * messages.length * 100)
    const newId = messages.length
      ? Math.max(...messages.map((m: any, n: number) => n)) + 1
      : 1
    const newMessage = {
      id: newId,
      userId: 'ljq0226',
      roomId: 'turboroom',
      content: `Your mom said it\'s ${index} time to come home`,
      type: 'text',
      createAt: new Date(),
    }

    setLastChangedIndex(index)
    setMessages([
      ...messages.slice(0, index),
      newMessage,
      ...messages.slice(index),
    ])
  }

  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'

  const ScrollHandler = async () => {
    if (chatListRef.current) {
      const chatlist = chatListRef.current as HTMLDivElement
      setPrevScrollTop(chatlist.scrollHeight)
      // when it gets to the top,send a request to the server
      if (chatlist.scrollTop < 50) {
        setLoading(true)
        setTimeout(() => {
          setPage(page + 1)
        }, 600)
      }
    }
  }
  const mouseEnter = (e: React.MouseEvent) => {
    e.currentTarget.classList.remove('chatlist')
    e.currentTarget.classList.add('chatlist_')
  }
  const mouseLeave = (e: React.MouseEvent) => {
    e.currentTarget.classList.remove('chatlist_')
    e.currentTarget.classList.add('chatlist')
  }

  return (
    <div
      ref={chatListRef}
      className={`${border} flex-1 h-[420px] chatlist overflow-y-scroll overflow-x-hidden scroll-smooth border-t`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onScroll={debounce(ScrollHandler, 300)}
    >
      <div className="flex flex-col w-full">
        <div className="text-right">
          <button
            onClick={addMessage}
            className="hover:bg-gray-100 active:bg-gray-200 rounded-full inline-flex items-center justify-center p-1.5 text-gray-500 hover:text-gray-700"
          >
            <div className="w-4 h-4" >＋</div>
          </button>
        </div>
        <LoadingSpinner loading={loading} />
        <RenderMessage messages={messages} setMessages={setMessages} dark={dark} lastChangedIndex={lastChangedIndex} setLastChangedIndex={setLastChangedIndex} />
      </div>

    </div>
  )
}

export default ChatMessage
