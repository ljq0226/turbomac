import React from 'react'
import Image from 'next/image'
const Chat = () => {
  return (
    <div className="flex w-full p-2 hover:bg-white/10 h-[70px]">
      <div className='rounded-full'>
        <Image src='/qq/icon/qqavatar.svg' width={50} height={50} alt='qq' />
      </div>

      <div className='flex flex-col w-full'>
        <div className='flex'> <div>ChatName</div> <div className='flex-1 h-full'></div><div>date</div></div>
        <p>last message</p>
      </div>
    </div>
  )
}

export default Chat
