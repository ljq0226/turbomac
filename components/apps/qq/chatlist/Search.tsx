import React from 'react'
import Image from 'next/image'
const Search = () => {
  return (
    <div className="flex w-full p-2 px-4 rounded-lg h-[44px]">

      <div className="flex bg-[#1e1e1e] w-full">
        <div className='w-[24px] flex-center'>
          <Image src='/qq/chatlist/search.svg' width={15} alt='qqavatar' height={15} />
        </div>

        <div className='flex-1 flex-center'>
          <input className='bg-[#1e1e1e] focus:outline-none' type="text" placeholder='Search' />
        </div>
        <div className='w-[12px] bg-[#262626]' />

        <div className='w-[24px] flex-center'>
          <Image src='/qq/chatlist/add.svg' width={15} alt='qqavatar' height={15} />
        </div>
      </div>

    </div>
  )
}

export default Search
