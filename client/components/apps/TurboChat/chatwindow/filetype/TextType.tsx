import React from 'react'

import type { Message } from 'types'

interface Props {
  message: Message
}

const TextType = ({ message }: Props) => {
  return (
    <div className={`${true
      ? 'bg-blue-500 ml-auto'
      : 'bg-gray-500 mr-auto'
      } px-3 py-1 bg-blue-500 text-white text-left rounded-xl select-none`}
      style={{ WebkitTapHighlightColor: 'transparent' }}>{message.content}</div>
  )
}

export default TextType
