import React from 'react'

const GroupMembers = () => {
  return (
    <div className="flex flex-col w-full flex-1  border-[#232323]">
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
