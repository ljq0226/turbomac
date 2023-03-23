'use client'
import type { Dispatch, SetStateAction } from 'react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Message } from 'types'
import Image from 'next/image'
import { PhotoProvider } from 'react-photo-view'
import clsx from 'clsx'
import UserInfoContext from '../UserInfoContext'
import ImageType from './filetype/ImageType'
import AudioType from './filetype/AudioType'
import DocumentType from './filetype/DocumentType'
import VideoType from './filetype/VideoType'
import TextType from './filetype/TextType'
interface Props {
  dark: boolean
  messages: Message[]
  sentFlag: boolean
  setMessages: Dispatch<SetStateAction<Message[]>>
}
const ChatMessage = ({ dark, messages, setMessages, sentFlag }: Props) => {
  const [lastChangedIndex, setLastChangedIndex] = useState<number>(0)
  const userInfo = useContext(UserInfoContext)
  const chatListRef = useRef(null)
  useEffect(() => {
    if (chatListRef.current) {
      const chatlist = chatListRef.current as HTMLDivElement
      setTimeout(() => {
        chatlist.scrollTop = 9999
        // setTimeout is because the message updating is beforer than chatlist scrolling
      }, 100)
    }
  }, [chatListRef.current, sentFlag])
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
        return ((<TextType message={message} isSelf={message.userId === userInfo.id}/>))
      case 'image':
        return (<ImageType message={message} />)
      case 'document':
        return (<DocumentType message={message} />)
      case 'audio':
        return (<AudioType message={message} />)
      case 'video':
        return (<VideoType message={message} />)
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
        <PhotoProvider>
          <ul className="w-full my-4">
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
                  key={message.id}
                  id={`message-${message.id}`}
                >
                  <div className={clsx('p-[3px] flex', message.userId === userInfo.id ? 'justify-end' : '')}>
                    {
                      message.userId !== userInfo.id
                      && <div className='my-2 rounded-full'>
                        <Image src={message.user.avatar} width={50} height={50} alt='qq' />
                      </div>}
                    <div className={clsx('flex flex-col', message.userId === userInfo.id ? 'items-end' : '')}>
                      <p className={dark ? '' : 'text-black'}>{message.user.username}</p>
                      <div
                        onDoubleClick={e => removeMessage(e, message)}
                      >
                        {renderMessage(message)}
                      </div>
                    </div>
                    {
                      message.userId === userInfo.id
                      && <div className='my-2 rounded-full'>
                        <Image src={message.user.avatar} width={50} height={50} alt='qq' />
                      </div>}
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </PhotoProvider>
      </div>

    </div>
  )
}

export default ChatMessage
