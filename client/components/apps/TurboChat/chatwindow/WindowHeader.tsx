import React from 'react'
import Icon from './Icon'

interface Props {
  dark: boolean
}

const WindowHeader = ({ dark }: Props) => {
  return (
    <>
      <div className="h-6"></div>
      <header className='flex-center '>
        <div className={`text-base ml-4 font-black ${dark ? '' : 'text-black'}`}>Group Title</div>
        <div className='flex-1'></div>
        <div className='flex mr-2 space-x-2'>
          <Icon name='more' />
        </div>
      </header>
    </>

  )
}

export default WindowHeader
