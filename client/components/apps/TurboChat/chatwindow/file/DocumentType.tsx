import React from 'react'
import Image from 'next/image'
import type { Message } from 'types'

interface Props {
  message: Message
}

const DocumentType = ({ message }: Props) => {
  const filePath = message.content.split('/')
  const fileName = filePath.pop()
  return (
    <a href={message.content}>
      <div className='flex p-2  bg-[#2c2c2c] w-[250px]'>
        <div className="flex flex-col flex-1 ">
          <p className='w-[150px] truncate text-blue-300 pl-2'>{`${fileName}`}</p>
          <p className='pl-2'>{message.size}</p>
        </div>
        <Image className='pr-3' src={`/chat/file/${fileName.split('.').pop()}.png`} width={60} height={60} alt='file_icon'></Image>
      </div>
    </a>
  )
}

export default DocumentType
