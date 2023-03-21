import Image from 'next/image'
import React, { useContext, useRef } from 'react'
import ThemeContext from '@/components/ThemeContext'
interface Props {
  name?: string
  desc?: string
}

const FileIcon: React.FC<Props> = ({ name, desc }) => {
  const { dark } = useContext(ThemeContext)
  const bg = dark ? 'bg-[#262626] ' : 'bg-[#fff] text-black'
  const src = dark ? name : `${name}_dark`
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileLoad = (event: ProgressEvent<FileReader>) => {
    const content = event.target?.result as string
    // do something with the file content
  }

  const handleUpload = () => {
    // use fetch API to upload file content to server
  }

  const handleIconClick = async () => {
    fileInputRef.current?.click()
    // const file = fileInputRef.current?.files && fileInputRef.current?.files[0]
    // if (file) {
    //   const reader = new FileReader()
    //   reader.onload = handleFileLoad
    //   reader.readAsText(file)
    // }
  }

  return (
    <div className='rounded-lg h-[46px] flex-center relative px-[5px]'
      onClick={handleIconClick}
      onMouseEnter={(e) => {
        e.currentTarget.children[0].setAttribute('src', `/qq/chatwindow/${name}_fill.svg`)
        e.currentTarget.children[1].classList.remove('invisible')
      }}
      onMouseLeave={(e) => {
        e.currentTarget.children[0].setAttribute('src', `/qq/chatwindow/${src}.svg`)
        e.currentTarget.children[1].classList.add('invisible')
      }}
    >
      <Image src={`/qq/chatwindow/${src}.svg`} className='w-fit h-fit' width={15} alt='qqappicon' height={15}
      />
      <div className={`absolute invisible rounded-sm top-12 ${bg} `}
        style={{ width: `${desc ? desc.length * 1.1 : 0}rem` }}
      >
        {desc}
      </div>
      <input type='file' ref={fileInputRef} className='hidden' />
    </div>
  )
}

export default FileIcon
