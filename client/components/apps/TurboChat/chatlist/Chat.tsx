import React, { useContext } from 'react'
import Image from 'next/image'
import { useChatStore } from 'store'
import clsx from 'clsx'
import ThemeContext from '@/components/ThemeContext'
import { dayjs } from '@/lib'
const Chat = () => {
  const { dark } = useContext(ThemeContext)
  const messages = useChatStore(s => s.messages)
  const lastMessage = messages[messages.length - 1]
  return (
    <div className={`flex w-full p-2  h-[70px] ${dark ? 'hover:bg-white/10' : 'hover:bg-[#f5f5f5]'}`}>
      <div className='p-2 rounded-full'>
        <Image src='https://turbomac-1309372570.cos.ap-shanghai.myqcloud.com/avatar/turbo.png' width={50} height={50} alt='qq' />
      </div>

      <div className='flex flex-col justify-center w-full'>
        <div className='flex'>
          <div className={dark ? '' : 'text-black'}>TurboRoom</div>
          <div className='flex-1 h-full'></div>
          <div className='text-sm truncate w-[40px] text-[#5e5e5e] '>{dayjs(new Date(lastMessage?.createdAt)).format('HH:mm').toString()}</div>
        </div>
        <p className={clsx('text-sm truncate w-[130px] text-[#5e5e5e] ', dark ? '' : 'text-gray-400')}>
          {lastMessage?.user.username}:{lastMessage?.content}
        </p>
      </div>
    </div>
  )
}

export default Chat
