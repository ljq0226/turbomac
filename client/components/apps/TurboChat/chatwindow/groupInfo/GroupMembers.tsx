import Image from 'next/image'
import React from 'react'
import { useAppsStore } from 'store'
import type { ActiveUser } from 'types'

interface Props {
  dark: boolean
  activeUsers: ActiveUser[]
}

const GroupMembers = ({ dark, activeUsers }: Props) => {
  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f2f2f2]'
  const max = useAppsStore(s => s.max)
  const renderMembers = () => {
    return (
      activeUsers.map(user => (
        <div key={user.id} className='flex items-center'>
          <Image src={user.avatar} width={30} height={30} alt='user-img' />
          <p>{user.username}{user.role === 'owner' && ' 👑'}</p>
        </div>
      ))
    )
  }

  return (
    <div className={`flex flex-col flex-1 w-full ${bg}`}>
      <header className='flex p-1'>
        <div>GroupMemberList {`(${activeUsers.length})`}</div>
        <div className="flex-1"></div>
        <div className='mr-2'></div>
      </header>
      <div className={`${max ? 'h-[480px]' : 'h-[380px]'} w-full px-2 overflow-y-scroll chatlist overflow-x:hidden scroll-smooth`}
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
        {renderMembers()}
      </div>
    </div>
  )
}

export default GroupMembers
