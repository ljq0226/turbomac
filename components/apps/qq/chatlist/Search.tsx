import React from 'react'
import Image from 'next/image'

interface Props {
  dark: boolean
}

const Search = ({ dark }: Props) => {
  const bg = dark ? 'bg-[#1e1e1e]' : 'bg-[#f5f5f5]'
  return (
    <div className="flex w-full p-2 px-4 rounded-lg h-[44px]">

      <div className={`flex w-full ${bg}`}>
        <div className='w-[24px] flex-center'>
          <Image src='/qq/chatlist/search.svg' width={15} alt='qqavatar' height={15} />
        </div>

        <div className='flex-1 flex-center'>
          <input className={`focus:outline-none ${bg}`} type="text" placeholder='Search' />
        </div>
        <div className={`w-[12px] ${dark ? 'bg-[#1e1e1e]' : 'bg-white'}`} />
        <div className='w-[24px] flex-center'>
          <Image src='/qq/chatlist/add.svg' width={15} alt='qqavatar' height={15} />
        </div>
      </div>

    </div>
  )
}

export default Search
