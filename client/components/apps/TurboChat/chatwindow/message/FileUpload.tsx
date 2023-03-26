import Image from 'next/image'
import type { Dispatch, SetStateAction } from 'react'
import React, { useContext, useRef } from 'react'
import { useSocketStore } from 'store'
import ThemeContext from '@/components/ThemeContext'
import { upload } from '@/api/upload'
import type { UserInfo } from '@/types'
interface Props {
  name?: string
  desc?: string
  page: number
  userInfo: UserInfo
  setSentFlag: Dispatch<SetStateAction<boolean>>
}

const FileUpload: React.FC<Props> = ({ name = 'file', desc = '文件', userInfo, setSentFlag, page }) => {
  const socket = useSocketStore(s => s.socket)
  const { dark } = useContext(ThemeContext)
  const bg = dark ? 'bg-[#262626] ' : 'bg-[#fff] text-black'
  const src = dark ? name : `${name}_dark`
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleIconClick = async () => {
    fileInputRef.current?.click()
  }

  const fileChangeListener = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files
    if (fileList) {
      const file = fileList[0]
      if (file.size > 4000000) {
        alert('您没有权限上传大于 4MB 的文件')
      }
      else {
        const res: { code: number; msg: string; data: any } = await upload(file)
        if (res.code === 200) {
          socket && socket.emit('createMessage', { message: res.data.location, type: res.data.type, userId: userInfo.id, size: res.data.size, page })
          setSentFlag(pre => !pre)
        }
      }
    }
  }
  return (
    <div className='rounded-lg h-[46px] flex-center relative px-[5px]'
      onClick={handleIconClick}
      onMouseEnter={(e) => {
        e.currentTarget.children[0].setAttribute('src', `/chat/chatwindow/${name}_fill.svg`)
        e.currentTarget.children[1].classList.remove('invisible')
      }}
      onMouseLeave={(e) => {
        e.currentTarget.children[0].setAttribute('src', `/chat/chatwindow/${src}.svg`)
        e.currentTarget.children[1].classList.add('invisible')
      }}
    >
      <Image src={`/chat/chatwindow/${src}.svg`} className='w-fit h-fit' width={15} alt='chatappicon' height={15}
      />
      <div className={`absolute invisible rounded-sm top-12 ${bg} `}
        style={{ width: `${desc ? desc.length * 1.1 : 0}rem` }}
      >
        {desc}
      </div>
      <input type='file' ref={fileInputRef}
        onChange={fileChangeListener}
        className='hidden' />
    </div>
  )
}

export default FileUpload
