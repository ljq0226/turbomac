import React from 'react'

interface Props {
  dark: boolean
}

const GroupAnnouncement = ({ dark }: Props) => {
  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'
  return (
    <div className={`${border} border-b w-full h-[200px]`}>
      <header className='flex p-1'>
        <div>GroupAnnouncement</div>
        <div className="flex-1"></div>
        <div className='mr-2'>🔍</div>
      </header>
      <div className='text-sm'>The Group Owner is to lazy to say nothing!</div>
    </div>
  )
}

export default GroupAnnouncement
