import React from 'react'
import { PhotoView } from 'react-photo-view'
import Image from 'next/image'
import type { Message } from 'types'

interface Props {
  message: Message
}

const ImageType = ({ message }: Props) => {
  return (
    <PhotoView src={message.content}>
      <div className='my-2 rounded-full'><Image width={100} height={100} src={message.content} alt={'msg_img'} /></div>
    </PhotoView>
  )
}

export default ImageType
