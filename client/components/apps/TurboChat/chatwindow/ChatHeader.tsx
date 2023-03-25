'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useClickAway } from 'ahooks'
import type { ActiveUser } from 'types'
import GroupAnnouncement from './groupInfo/GroupAnnouncement'
import GroupMembers from './groupInfo/GroupMembers'
import Icon from './icon/Icon'

interface Props {
  dark: boolean
  activeUsers: ActiveUser[]
}

const ChatHeader = ({ dark, activeUsers }: Props) => {
  const divRef = useRef(null)
  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'
  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f2f2f2]'
  const [isShow, setIsShow] = useState(false)

  const handleIconClick = () => {
    setIsShow(!isShow)
  }
  useClickAway(() => {
    setIsShow(false)
  }, divRef)

  return (
    <>
      <div className="h-6"></div>
      <motion.header className='flex-center'>
        <div className={`text-base ml-4 font-black ${dark ? '' : 'text-black'}`}>TurboRoom{` (${activeUsers.length})`}</div>
        <div className='flex-1'></div>
        <div className='relative flex mr-2 space-x-2'>
          <div >
            <Icon name='more' onClick={handleIconClick} />
          </div>
          {
            isShow && <motion.div
              className={`absolute overflow-hidden top-12 left-[-144px]  z-10 flex flex-col w-[177px] border ${border} ${bg}`}
              initial={{ opacity: isShow ? 0 : 1 }}
              animate={{ opacity: isShow ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              ref={divRef}
            >
              <GroupAnnouncement dark={dark} />
              <GroupMembers dark={dark} activeUsers={activeUsers} />
            </motion.div>
          }
        </div>
      </motion.header>
    </>

  )
}

export default ChatHeader
