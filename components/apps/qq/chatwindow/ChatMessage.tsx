import React from 'react'

const ChatMessage = () => {
  return (
    <div className='chatlist h-[420px] overflow-y-scroll overflow-x:hidden scroll-smooth border border-[#232323]'
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
