import React from 'react'
import Image from 'next/image'
interface Props {
  onClick?: () => void
  name?: string
  desc?: string
}

const Icon: React.FC<Props> = ({ onClick, name, desc }) => {
  return (
    <div className='rounded-lg h-[46px] flex-center relative px-[5px]'
      onClick={() => onClick}
      onMouseEnter={(e) => {
        e.currentTarget.children[0].setAttribute('src', `/qq/chatwindow/${name}_fill.svg`)
        e.currentTarget.children[1].classList.remove('invisible')
      }}
      onMouseLeave={(e) => {
        e.currentTarget.children[0].setAttribute('src', `/qq/chatwindow/${name}.svg`)
        e.currentTarget.children[1].classList.add('invisible')
      }}
    >
      <Image src={`/qq/chatwindow/${name}.svg`} width={23} alt='qqappicon' height={23} />
      <div className="absolute  bg-[#262626] rounded-sm  top-12 invisible "
        style={{ width: `${desc ? desc.length * 1.1 : 0}rem` }}
      >
        {desc}
      </div>
    </div>
  )
}

export default Icon
