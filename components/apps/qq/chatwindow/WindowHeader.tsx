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
        <div className={`text-base ml-4 font-black ${dark ? '' : 'text-black'}`}>ICode Titile</div>
        <div className='flex-1'></div>
        <div className='flex mr-2 space-x-2'>
          <Icon name='apps' desc='应用中心' />
          <Icon name='phone' desc='语音通话' />
          <Icon name='video' desc='视频通话' />
          <Icon name='screen' desc='屏幕共享' />
          <Icon name='friend' desc='邀请进群' />
          <Icon name='more' />
        </div>
      </header>
    </>

  )
}

export default WindowHeader
