import React from 'react'
interface Props {
  dark: boolean
}

const ChatMessage = ({ dark }: Props) => {
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
      聊天内容

    </div>
  )
}

export default ChatMessage
