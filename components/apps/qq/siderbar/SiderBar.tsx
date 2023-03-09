import React from 'react'
import Image from 'next/image'
import Icon from './Icon'
const SideBar = () => {
  return (
    <aside className='h-full w-[66px] flex flex-col select-none bg-black/10 '>

      <div className='w-full h-7 '></div>
      <div className="flex-center">
        <Image src='/qq/icon/qqlogo.svg' width={15} alt='qqlogo' height={15} />
        <div className='flex-center'>QQ</div>
      </div>
      <div className='my-4 flex-center'>
        <Image src='/qq/icon/qqavatar.svg' width={35} alt='qqavatar' height={35} />
      </div>
      <div className="flex flex-col h-[160px] p-3 space-y-2">
        <Icon name='chat' />
        <Icon name='people' />
        <Icon name='qqspace' />
      </div>
      <div className="flex-1 w-full"></div>
      <div className="flex flex-col h-[160px] p-3 space-y-2 mb-3">
        <Icon name='email' />
        <Icon name='collect' />
        <Icon name='menu' />
      </div>
    </aside>
  )
}

export default SideBar
