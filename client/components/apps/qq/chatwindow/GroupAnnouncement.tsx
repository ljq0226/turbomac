import React from 'react'

interface Props {
  dark: boolean
}

const GroupAnnouncement = ({ dark }: Props) => {
  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'
  return (
    <div className={`${border} border-b w-full h-[200px]`}>
      <header className='flex p-1'>
        <div>群公告</div>
        <div className="flex-1"></div>
        <div className='mr-2'>🔍</div>
      </header>
      <div className='text-sm'>群公告内容群公告内容群公告内容群公告内容群公告内容</div>
    </div>
  )
}

export default GroupAnnouncement
