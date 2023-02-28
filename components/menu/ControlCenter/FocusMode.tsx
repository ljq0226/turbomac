import React from 'react'
import { Focus } from 'lucide-react'
interface Props {
  dark: boolean
  bg: string
}
const FocusMode = ({ dark, bg }: Props) => {
  return (
    <div
      className={`flex p-3 py-4 rounded-[13px] h-16 border shadow ${bg} cursor-pointer`}
    >
      <div
        className={'w-8 h-8 py-[5px] pl-[7px] text-center border rounded-full bg-gray-200 }'}
      >
        <Focus size={16} color='black' />
      </div>
      <h2
        className={`align-middle py-[5px] pl-2 font-medium text-md ${dark ? 'text-white' : 'text-black'
          }`}
      >
        Focus
      </h2>
    </div>
  )
}

export default FocusMode
