'use client'
import type { Dispatch, SetStateAction } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Message } from 'types'
import Image from 'next/image'
interface Props {
  dark: boolean
  messages: Message[]
  setMessages: Dispatch<SetStateAction<Message[]>>
}
const ChatMessage = ({ dark, messages, setMessages }: Props) => {
  const [lastChangedIndex, setLastChangedIndex] = useState<number>(0)
  const chatListRef = useRef(null)
  useEffect(() => {
    if (chatListRef.current) {
      const chatlist = chatListRef.current as HTMLDivElement
      chatlist.scrollTop = chatlist.scrollHeight
    }
  }, [messages])
  function addMessage() {
    const index = Math.floor(Math.random() * messages.length * 100)
    const newId = messages.length
      ? Math.max(...messages.map((m, n) => n)) + 1
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

  function removeMessage(e: React.MouseEvent, message: Message) {
    e.preventDefault()
    setLastChangedIndex(messages.indexOf(message))
    setMessages(messages => messages.filter(m => m.id !== message.id))
  }

  const animatingMessages = messages.slice(lastChangedIndex)

  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'
  const renderMessage = (message: Message) => {
    switch (message.type) {
      case 'text':
        return (<div className={`${true
          ? 'bg-blue-500 ml-auto'
          : 'bg-gray-500 mr-auto'
          } px-3 py-1 bg-blue-500 text-white text-left rounded-xl select-none`}
          style={{ WebkitTapHighlightColor: 'transparent' }}>{message.content}</div>)
      case 'image':
        return (<Image width={50} height={50} src={message.content} alt={'msg_img'} />)
      case 'document':
        return (<a href={message.content} target="_blank" rel="noopener noreferrer">Download Document</a>)
      case 'audio':
        return (<audio src={message.content} controls />)
      case 'video':
        return (<video src={message.content} controls />)
    }
  }
  return (
    <div
      ref={chatListRef}
      className={`${border} chatlist h-[420px] overflow-y-scroll overflow-x:hidden scroll-smooth border-t`}
      onMouseEnter={(e) => {
        e.currentTarget.classList.remove('chatlist')
        e.currentTarget.classList.add('chatlist_')
      }
      }
      onMouseLeave={(e) => {
        e.currentTarget.classList.remove('chatlist_')
        e.currentTarget.classList.add('chatlist')
      }}
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

        <ul className="w-full mt-4">
          <AnimatePresence initial={false} mode="popLayout">
            {messages.map(message => (
              <motion.li
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  opacity: { duration: 0.2 },
                  layout: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: lastChangedIndex
                      ? animatingMessages.indexOf(message) * 0.15 + 0.85
                      : 1,
                  },
                }}
                style={{
                  originX: true ? 1 : 0,
                }}
                key={message.id}
                id={`message-${message.id}`}
              >
                <div className="p-[3px] flex">
                  <div className='my-2 rounded-full'>
                    <img src={message.user.avatar} width={30} height={30} alt='qq' />
                  </div>
                  <div className="flex flex-col">
                    <p>{message.user.username}</p>
                    <div
                      onDoubleClick={e => removeMessage(e, message)}
                    >
                      {renderMessage(message)}
                    </div>

                  </div>

                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

    </div>
  )
}

export default ChatMessage
