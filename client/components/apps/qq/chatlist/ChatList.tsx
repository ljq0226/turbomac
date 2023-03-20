import React, { useContext } from 'react'

import Chat from './Chat'
import Search from './Search'
import ThemeContext from '@/components/ThemeContext'

const ChatList = () => {
  const { dark } = useContext(ThemeContext)
  const bg = dark ? 'bg-[#262626] ' : 'bg-white'
  return (
    <div className={`w-[250px] flex flex-col select-none ${bg}`}>
      <div className='w-full h-4 '></div>
      <Search dark={dark}/>
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

      </div>

    </div>
  )
}

export default ChatList
