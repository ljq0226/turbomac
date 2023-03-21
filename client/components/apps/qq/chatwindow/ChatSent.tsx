import React, { useRef, useState } from 'react'
import { useClickAway } from 'ahooks'
import Icon from './Icon'
import EmojiPanel from './EmojiPanel'
import { socket } from '@/lib'
interface Props {
  dark: boolean
}

const ChatSent = ({ dark }: Props) => {
  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f2f2f2]'
  const border = dark ? 'border-[#232323]' : 'border-[#e9e9e9]'
  const [textValue, setTextValue] = useState('')
  const [showEmojiPanel, setShowEmojiPanel] = useState(false)
  const ref = useRef(null)
  useClickAway(() => {
    setShowEmojiPanel(!showEmojiPanel)
  }, ref)

  const enterHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      socket.emit('createMessage', textValue)
      setTextValue('')
    }
  }
  const handleSelectEmoji = (selectedEmoji: string) => {
    setTextValue(textValue + selectedEmoji)
  }
  return (
    <div className='relative flex flex-col'>
      <div className="absolute bottom-[100px] w-full" >
        {showEmojiPanel && <EmojiPanel divRef={ref} onSelectEmoji={handleSelectEmoji} dark={dark} />}
      </div>
      <div className={`flex h-[40px] space-x-2 border-t mx-4 ${border}`}>
        <Icon name='smail' desc='表情' onClick={() => {
          setShowEmojiPanel(!showEmojiPanel)
        }} />
        <Icon name='file' desc='文件' />
        <Icon name='img' desc='照片' />
        <Icon name='voice' desc='语音输入' />
        <div className='flex-1'></div>
        <Icon name='record' desc='历史记录' />
      </div>

      <div className='flex-1 '>
        <textarea className={`${bg} w-full h-full px-3 py-2 overflow-y-scroll rounded-lg resize-none focus:outline-none focus:shadow-outline chatlist overflow-x:hidden scroll-smooth`}
          value={textValue}
          onChange={e => setTextValue(e.target.value)}
          onKeyDown={enterHandler}
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
    </div>

  )
}

export default ChatSent
