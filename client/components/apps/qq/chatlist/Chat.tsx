import React, { useContext } from 'react'
import Image from 'next/image'
import ThemeContext from '@/components/ThemeContext'
const Chat = () => {
  const { dark } = useContext(ThemeContext)
  const hover = dark ? 'hover:bg-white/10' : 'hover:bg-[#f5f5f5]'
  const text = dark ? '' : 'text-black'

  return (
    <div className={`flex w-full p-2  h-[70px] ${hover}`}>
      <div className='rounded-full'>
        <Image src='/qq/icon/qqavatar.svg' width={50} height={50} alt='qq' />
      </div>

      <div className='flex flex-col w-full'>
        <div className='flex'> <div className={text}>TurboRoom</div><div className='flex-1 h-full'></div><div>date</div></div>
        <p className={dark ? '' : 'text-gray-400'}>last message</p>
      </div>
    </div>
  )
}

export default Chat
