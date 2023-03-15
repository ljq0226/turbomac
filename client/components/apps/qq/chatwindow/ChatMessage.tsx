'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
interface Props {
  dark: boolean
}
interface Message {
  name: string
  text: string
}
const ChatMessage = ({ dark }: Props) => {
  const [messages, setMessages] = useState<Message[]>([])

  const [lastChangedIndex, setLastChangedIndex] = useState<number>(0)

  function addMessage() {
    const index = Math.floor(Math.random() * messages.length)
    const newId = messages.length
      ? Math.max(...messages.map((m, n) => n)) + 1
      : 1
    const newMessage = {
      id: newId,
      name: Math.random() > 0.5 ? 'me' : 'them',
      text: 'Your mom said it\'s time to come home',
    }

    setLastChangedIndex(index)
    setMessages([
      ...messages.slice(0, index),
      newMessage,
      ...messages.slice(index),
    ])
  }

  function removeMessage(message: any) {
    setLastChangedIndex(messages.indexOf(message))
    setMessages(messages => messages.filter((m, n) => n !== message.id))
  }

  const animatingMessages = messages.slice(lastChangedIndex)


  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'
  return (
    <div className={`${border} chatlist h-[420px] overflow-y-scroll overflow-x:hidden scroll-smooth border-t`}
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
            {messages.map((message, index) => (
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
                  originX: message.name === 'me' ? 1 : 0,
                }}
                key={index}
              >
                <div className="p-[3px] flex">
                  <div className='my-2 rounded-full'>
                    <Image src='/qq/icon/qqavatar.svg' width={30} height={30} alt='qq' />
                  </div>
                  <div className="flex flex-col">
                    <p>{message.name}</p>
                    <button
                      onClick={() => removeMessage(message)}
                      className={`${message.name === 'me'
                        ? 'bg-blue-500 ml-auto'
                        : 'bg-gray-500 mr-auto'
                        } px-3 py-1 bg-blue-500 text-white text-left rounded-full select-none`}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      {message.text}
                    </button>

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
