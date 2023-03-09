import React from 'react'
import Icon from './Icon'
const ChatSent = () => {
  return (
    <>

      <div className='flex h-[40px] space-x-2 border-t border-[#232323] mx-4'>
        <Icon name='smail' desc='表情' />
        <Icon name='sc' desc='截图' />
        <Icon name='file' desc='文件' />
        <Icon name='img' desc='照片' />
        <Icon name='voice' desc='语音输入' />
        <div className='flex-1'></div>
        <Icon name='record' desc='历史记录' />
      </div>
      <div className='flex-1 '>
        <textarea className="w-full px-3 h-full bg-[#1a1a1a] py-2 rounded-lg resize-none focus:outline-none focus:shadow-outline overflow-y-scroll chatlist overflow-x:hidden scroll-smooth"
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

        </textarea>
      </div>
    </>

  )
}

export default ChatSent
