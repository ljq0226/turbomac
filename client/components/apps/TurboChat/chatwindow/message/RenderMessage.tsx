import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import type { Dispatch, SetStateAction } from 'react'
import React, { useContext } from 'react'
import { PhotoProvider } from 'react-photo-view'
import type { Message } from 'types'
import Image from 'next/image'
import UserInfoContext from '../../UserInfoContext'
import { AudioType, DocumentType, ImageType, TextType, VideoType } from '../filetype'
import RenderTime from './RenderTime'
interface Props {
  dark: boolean
  lastChangedIndex: number
  setLastChangedIndex: Dispatch<SetStateAction<number>>
  messages: Message[]
  setMessages: Dispatch<SetStateAction<Message[]>>
}

const RenderMessage = ({ messages, dark, setMessages, lastChangedIndex, setLastChangedIndex }: Props) => {
  const userInfo = useContext(UserInfoContext)
  const animatingMessages = messages.slice(lastChangedIndex)
  const renderMessage = (message: Message) => {
    switch (message.type) {
      case 'text':
        return ((<TextType message={message} isSelf={message.userId === userInfo.id} />))
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

  function removeMessage(e: React.MouseEvent, message: Message) {
    e.preventDefault()
    setLastChangedIndex(messages.indexOf(message))
    setMessages(messages => messages.filter(m => m.id !== message.id))
  }

  return (
    <>
      <PhotoProvider>
        <ul className="w-full my-4">
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
                key={message.id}
                id={`message-${message.id}`}
              >
                <RenderTime message={message} messages={messages} index={index} />
                <div className={clsx('p-[3px] flex', message.userId === userInfo.id ? 'justify-end' : '')}>
                  {
                    message.userId !== userInfo.id
                    && <div className='my-2 rounded-full'>
                      <Image src={message.user.avatar} width={50} height={50} alt='qq' />
                    </div>}
                  <div className={clsx('flex flex-col', message.userId === userInfo.id ? 'items-end' : '')}>
                    <p className={clsx(dark ? '' : 'text-black', message.user.role === 'owner' && 'text-yellow-300')}>{message.user.username}{message.user.role === 'owner' && ' 👑'}</p>
                    <div
                      onDoubleClick={e => removeMessage(e, message)}
                    >
                      {renderMessage(message)}
                    </div>
                  </div>
                  {
                    message.userId === userInfo.id
                    && (
                      <div className='my-2 rounded-full'>
                        <Image src={message.user.avatar} width={50} height={50} alt='qq' />
                      </div>
                    )}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </PhotoProvider>
    </>
  )
}

export default RenderMessage
