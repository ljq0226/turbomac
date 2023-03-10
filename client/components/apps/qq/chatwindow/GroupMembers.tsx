import React from 'react'

interface Props {
  dark: boolean
}

const GroupMembers = ({ dark }: Props) => {
  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f2f2f2]'
  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'
  return (
    <div className={`flex flex-col flex-1 w-full  ${border}`}>
      <header className='flex p-1'>
        <div>群成员 25</div>
        <div className="flex-1"></div>
        <div className='mr-2'>🔍</div>
      </header>
      <div className='h-[340px] w-full overflow-y-scroll chatlist overflow-x:hidden scroll-smooth'
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
        成员列表

      </div>
    </div>
  )
}

export default GroupMembers
