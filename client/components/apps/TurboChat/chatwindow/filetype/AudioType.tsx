import React from 'react'
import type { Message } from 'types'

interface Props {
  message: Message
}

const AudioType = ({ message }: Props) => {
  const filePath = message.content.split('/')
  const fileName = filePath.pop()
  return (
    <a href={message.content}>
      <div className='flex p-2 mb-2  w-[315px]'>
        <div className="flex flex-col flex-1">
          <div className='flex justify-around pb-2 text-blue-500'>
            <p className='w-[200px] truncate'>{`${decodeURIComponent(fileName)}`}</p>
            <p>{message.size}</p>
          </div>
          <audio src={message.content} controls />
        </div>
      </div>
    </a >
  )
}

export default AudioType
