import React from 'react'
import { motion } from 'framer-motion'
interface Props {
  onSelectEmoji: (emjoy: string) => void
  dark: boolean
  divRef: React.MutableRefObject<null>
}

const EmojiPanel = ({ onSelectEmoji, dark, divRef }: Props) => {
  const bg = dark ? 'bg-[#060606]' : 'bg-[#fcfcfc]'
  return (
    <motion.div
      ref={divRef}
      className={`emjoyPanel w-3/4 px-[20px] overflow-y-scroll h-[200px] text-3xl flex flex-wrap space-x-[6px] chatlist ${bg}`}
      initial={{ opacity: 0.3, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 1 }}
    >
      <span className='ml-1' onClick={() => onSelectEmoji('😀')}>😀</span>
      <span onClick={() => onSelectEmoji('😂')}>😂</span>
      <span onClick={() => onSelectEmoji('😍')}>😍</span>
      <span onClick={() => onSelectEmoji('🤔')}>🤔</span>
      <span onClick={() => onSelectEmoji('🤣')}>🤣</span>
      <span onClick={() => onSelectEmoji('🥰')}>🥰</span>
      <span onClick={() => onSelectEmoji('😊')}>😊</span>
      <span onClick={() => onSelectEmoji('😎')}>😎</span>
      <span onClick={() => onSelectEmoji('😜')}>😜</span>
      <span onClick={() => onSelectEmoji('😘')}>😘</span>
      <span onClick={() => onSelectEmoji('😋')}>😋</span>
      <span onClick={() => onSelectEmoji('😇')}>😇</span>
      <span onClick={() => onSelectEmoji('🤩')}>🤩</span>
      <span onClick={() => onSelectEmoji('🤗')}>🤗</span>
      <span onClick={() => onSelectEmoji('🤪')}>🤪</span>
      <span onClick={() => onSelectEmoji('🤫')}>🤫</span>
      <span onClick={() => onSelectEmoji('🤭')}>🤭</span>
      <span onClick={() => onSelectEmoji('🥳')}>🥳</span>
      <span onClick={() => onSelectEmoji('🥺')}>🥺</span>
      <span onClick={() => onSelectEmoji('🤯')}>🤯</span>
      <span onClick={() => onSelectEmoji('🤡')}>🤡</span>
      <span onClick={() => onSelectEmoji('🤠')}>🤠</span>
      <span onClick={() => onSelectEmoji('🤢')}>🤢</span>
      <span onClick={() => onSelectEmoji('🤮')}>🤮</span>
      <span onClick={() => onSelectEmoji('🥴')}>🥴</span>
      <span onClick={() => onSelectEmoji('🥵')}>🥵</span>
      <span onClick={() => onSelectEmoji('🥶')}>🥶</span>
      <span onClick={() => onSelectEmoji('🥷')}>🥷</span>
      <span onClick={() => onSelectEmoji('🦸')}>🦸</span>
      <span onClick={() => onSelectEmoji('🦹')}>🦹</span>
      <span onClick={() => onSelectEmoji('🦷')}>🦷</span>
      <span onClick={() => onSelectEmoji('🦴')}>🦴</span>
      <span onClick={() => onSelectEmoji('🦾')}>🦾</span>
      <span onClick={() => onSelectEmoji('🧠')}>🧠</span>
      <span onClick={() => onSelectEmoji('🧐')}>🧐</span>
      <span onClick={() => onSelectEmoji('🧑')}>🧑</span>
      <span onClick={() => onSelectEmoji('🧒')}>🧒</span>
      <span onClick={() => onSelectEmoji('🧓')}>🧓</span>
      <span onClick={() => onSelectEmoji('🧔')}>🧔</span>
      <span onClick={() => onSelectEmoji('🧕')}>🧕</span>
      <span onClick={() => onSelectEmoji('🧖')}>🧖</span>
      <span onClick={() => onSelectEmoji('🧗')}>🧗</span>
      <span onClick={() => onSelectEmoji('🧘')}>🧘</span>
      <span onClick={() => onSelectEmoji('🧙')}>🧙</span>
      <span onClick={() => onSelectEmoji('🧚')}>🧚</span>
      <span onClick={() => onSelectEmoji('🧛')}>🧛</span>
      <span onClick={() => onSelectEmoji('🧜')}>🧜</span>
      <span onClick={() => onSelectEmoji('🧝')}>🧝</span>
      <span onClick={() => onSelectEmoji('🧞')}>🧞</span>
      <span onClick={() => onSelectEmoji('🧟')}>🧟</span>
      <span onClick={() => onSelectEmoji('🧠')}>🧠</span>
      <span onClick={() => onSelectEmoji('🧡')}>🧡</span>
      <span onClick={() => onSelectEmoji('🧢')}>🧢</span>
      <span onClick={() => onSelectEmoji('🧣')}>🧣</span>
      <span onClick={() => onSelectEmoji('🧤')}>🧤</span>
      <span onClick={() => onSelectEmoji('🧥')}>🧥</span>
      <span onClick={() => onSelectEmoji('🧦')}>🧦</span>
      <span onClick={() => onSelectEmoji('🧧')}>🧧</span>
      <span onClick={() => onSelectEmoji('🧨')}>🧨</span>
      <span onClick={() => onSelectEmoji('🧩')}>🧩</span>
      <span onClick={() => onSelectEmoji('🧪')}>🧪</span>
      <span onClick={() => onSelectEmoji('🧫')}>🧫</span>
      <span onClick={() => onSelectEmoji('🧬')}>🧬</span>
      <span onClick={() => onSelectEmoji('🧭')}>🧭</span>
      <span onClick={() => onSelectEmoji('🧮')}>🧮</span>
      <span onClick={() => onSelectEmoji('🧯')}>🧯</span>
      <span onClick={() => onSelectEmoji('🧰')}>🧰</span>
      <span onClick={() => onSelectEmoji('🧱')}>🧱</span>
      <span onClick={() => onSelectEmoji('🧲')}>🧲</span>
      <span onClick={() => onSelectEmoji('🧳')}>🧳</span>
      <span onClick={() => onSelectEmoji('🧴')}>🧴</span>
      <span onClick={() => onSelectEmoji('🧵')}>🧵</span>
      <span onClick={() => onSelectEmoji('🧶')}>🧶</span>
      <span onClick={() => onSelectEmoji('🧷')}>🧷</span>
      <span onClick={() => onSelectEmoji('🧸')}>🧸</span>
      <span onClick={() => onSelectEmoji('🧹')}>🧹</span>
      <span onClick={() => onSelectEmoji('🧺')}>🧺</span>
      <span onClick={() => onSelectEmoji('🧻')}>🧻</span>
      <span onClick={() => onSelectEmoji('🧼')}>🧼</span>
      <span onClick={() => onSelectEmoji('🧽')}>🧽</span>
      <span onClick={() => onSelectEmoji('🧾')}>🧾</span>
    </motion.div>
  )
}

export default EmojiPanel
