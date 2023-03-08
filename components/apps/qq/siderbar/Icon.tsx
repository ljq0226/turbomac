import React from 'react'
import Image from 'next/image'
interface Props {
  onClick?: () => void
  name?: string
}

const Icon: React.FC<Props> = ({ onClick, name }) => {
  return (
    <div className='rounded-lg w-full h-[46px] flex-center hover:bg-white/10'
      onClick={() => onClick}
      onMouseEnter={(e) => {
        (e.currentTarget.children[0].setAttribute('src', `/qq/siderbar/${name}_fill.svg`))
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.children[0].setAttribute('src', `/qq/siderbar/${name}.svg`))
      }}
    >
      <Image src={`/qq/siderbar/${name}.svg`} width={30} alt='qqappicon' height={30} />
    </div>
  )
}

export default Icon
