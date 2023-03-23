import React from 'react'
import Image from 'next/image'
import TopIcon from './TopIcon'
import BottomIcon from './BottomIcon'

interface Props {
  dark: boolean
}

const SideBar = ({ dark }: Props) => {
  const bg = dark ? 'bg-[#262626] ' : 'bg-[#e4e4e5]'
  return (
    <aside className={`h-full w-[66px] flex flex-col select-none ${bg}`}>
      <div className='w-full h-7 '></div>
      <div className='my-4 flex-center'>
        <Image src='https://turbomac-1309372570.cos.ap-shanghai.myqcloud.com/avatar/avatar1.png' width={35} alt='qqavatar' height={35} />
      </div>
      <div className="flex flex-col h-[160px] space-y-1">
        <TopIcon name='chat' />
        {/* <TopIcon name='people' /> */}
      </div>
      <div className="flex-1 w-full"></div>
      <div className="flex flex-col h-[160px] p-3 space-y-2 mb-3">
        <BottomIcon name='email' />
        <BottomIcon name='collect' />
        <BottomIcon name='menu' />
      </div>
    </aside>
  )
}

export default SideBar
