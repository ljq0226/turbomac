import React, { useContext } from 'react'
import Image from 'next/image'
import ThemeContext from '@/components/ThemeContext'
interface Props {
  onClick?: () => void
  name?: string
}

const Icon: React.FC<Props> = ({ onClick, name }) => {
  const { dark } = useContext(ThemeContext)
  const text = dark ? '' : 'text-black'
  const src = dark ? name : `${name}_dark`
  return (
    <div className={'rounded-lg w-full h-[46px] flex-center'}
      onClick={() => onClick}
      onMouseEnter={(e) => {
        (e.currentTarget.children[0].setAttribute('src', `/qq/siderbar/${name}_fill.svg`))
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.children[0].setAttribute('src', `/qq/siderbar/${src}.svg`))
      }}
    >
      <Image src={`/qq/siderbar/${src}.svg`} width={30} alt='qqappicon' height={30} />
    </div>
  )
}

export default Icon
