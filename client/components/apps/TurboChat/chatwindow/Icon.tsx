import Image from 'next/image'
import React, { useContext } from 'react'
import ThemeContext from '@/components/ThemeContext'
interface Props {
  onClick?: () => void
  name?: string
  desc?: string
}

const Icon: React.FC<Props> = ({ onClick, name, desc }) => {
  const { dark } = useContext(ThemeContext)

  const bg = dark ? 'bg-[#262626] ' : 'bg-[#fff] text-black'
  const src = dark ? name : `${name}_dark`
  return (
    <div className='rounded-lg h-[46px] flex-center relative px-[5px]'
      onClick={(e) => {
        e.preventDefault()
        onClick && onClick()
      }}
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
    </div>
  )
}

export default Icon
