'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useClickAway } from 'ahooks'
import GroupAnnouncement from './groupInfo/GroupAnnouncement'
import GroupMembers from './groupInfo/GroupMembers'
import Icon from './icon/Icon'

interface Props {
  dark: boolean
}

const WindowHeader = ({ dark }: Props) => {
  const divRef = useRef(null)
  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'
  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f2f2f2]'
  const [isTransformed, setIsTransformed] = useState(false)

  const handleIconClick = () => {
    setIsTransformed(!isTransformed)
  }
  useClickAway(() => {
    setIsTransformed(false)
  }, divRef)

  return (
    <>
      <div className="h-6"></div>
      <motion.header className='flex-center '>
        <div className={`text-base ml-4 font-black ${dark ? '' : 'text-black'}`}>Group Title</div>
        <div className='flex-1'></div>
        <div className='relative flex mr-2 space-x-2'>
          <div ref={divRef} >
            <Icon name='more' onClick={handleIconClick} />
          </div>
          <motion.div
            className={`absolute overflow-hidden top-12  z-10 flex flex-col w-[177px] border ${border} ${bg}`}
            initial={{ x: isTransformed ? 0 : -135, opacity: isTransformed ? 0 : 1 }}
            animate={{ x: isTransformed ? -135 : 0, opacity: isTransformed ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <GroupAnnouncement dark={dark} />
            <GroupMembers dark={dark} />
          </motion.div>
        </div>
      </motion.header>
    </>

  )
}

export default WindowHeader
