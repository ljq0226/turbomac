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
      onClick={() => onClick}
      onMouseEnter={(e) => {
        e.currentTarget.children[0].setAttribute('src', `/qq/chatwindow/${name}_fill.svg`)
        e.currentTarget.children[1].classList.remove('invisible')
      }}
      onMouseLeave={(e) => {
        e.currentTarget.children[0].setAttribute('src', `/qq/chatwindow/${src}.svg`)
        e.currentTarget.children[1].classList.add('invisible')
      }}
    >
      <Image src={`/qq/chatwindow/${src}.svg`} width={23} alt='qqappicon' height={23} />
      <div className={`absolute invisible rounded-sm top-12 ${bg} `}
        style={{ width: `${desc ? desc.length * 1.1 : 0}rem` }}
      >
        {desc}
      </div>
    </div>
  )
}

export default Icon
