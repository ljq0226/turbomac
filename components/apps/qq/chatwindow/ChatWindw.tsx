import React from 'react'
import Icon from './Icon'

const ChatWindw = () => {
  return (
    <div className='flex flex-col flex-1 bg-[#171717]/95'>
      <div className="h-6"></div>
      <header className='flex-center '>
        <div className='text-base'>ICode Titile</div>
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
      <div className="flex flex-1">

        <div className='flex flex-col flex-1 bg-[#1a1a1a] '>
          <div className='chatlist h-[420px] overflow-y-scroll overflow-x:hidden scroll-smooth border border-[#232323]'
            onMouseEnter={(e) => {
              e.currentTarget.classList.remove('chatlist')
              e.currentTarget.classList.add('chatlist_')
            }
            }
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('chatlist_')
              e.currentTarget.classList.add('chatlist')
            }}
          >
            <div className="h-[500px]">q</div>
            <div className="h-[500px]">q</div>
            <div className="h-[500px]">q</div>
            <div className="h-[500px]">q</div>

          </div>
          <div className='flex h-[40px] space-x-2 border-t border-[#232323] mx-4'>
            <Icon name='smail' desc='表情' />
            <Icon name='sc' desc='截图' />
            <Icon name='file' desc='文件' />
            <Icon name='img' desc='照片' />
            <Icon name='voice' desc='语音输入' />
            <div className='flex-1'></div>
            <Icon name='record' desc='历史记录' />
          </div>
          <div className='flex-1'>

          </div>
        </div>

        <div className="flex  w-[177px] border border-[#232323]">
          <div className="border-y border-[#232323]"></div>
        </div>

      </div>

    </div>
  )
}

export default ChatWindw
