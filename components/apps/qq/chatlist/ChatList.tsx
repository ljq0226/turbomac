import React from 'react'

import Chat from './Chat'
import Search from './Search'
const ChatList = () => {
  return (
    <div className='w-[250px]  bg-[#262626]  flex flex-col select-none'>
      <div className='w-full h-4 '></div>

      <Search />

      <div className='chatlist w-full h-[566px] overflow-y-scroll overflow-x:hidden scroll-smooth'
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
        <Chat />
        <Chat />
        <Chat />
        <Chat />

      </div>

    </div>
  )
}

export default ChatList
