import dayjs from 'dayjs'
import React from 'react'
import type { Message } from 'types'

interface Props {
  messages: Message[]
  message: Message
  index: number
}

const RenderTime = ({ messages, message, index }: Props) => {
  const prevMessage = messages[index - 1]
  const curDate = dayjs(new Date(message.createdAt))
  const nowDate = dayjs(new Date())
  const curHour = curDate.hour()
  const curMinute = curDate.minute()
  const isSameDay = curDate.date() === nowDate.date()
  const isYesterday = curDate.date() + 1 === nowDate.date()
  const isAM = curHour < 12
  const isPM = curHour >= 12 && curHour < 18
  const ONE_MINUTE = 60 * 1000
  const curTime = new Date(message.createdAt).getTime()
  const prevTime = prevMessage ? new Date(prevMessage.createdAt).getTime() : 0
  if (!prevMessage)
    return <p className='text-xs text-center text-gray-400'>{dayjs(curTime).format('YYYY/MM/DD HH:mm').toLocaleString()}</p>
  if (curTime - prevTime > 5 * ONE_MINUTE) {
    if (isSameDay) {
      return (
        <p className='text-xs text-center text-gray-400'>
          {isAM ? '上午' : (isPM ? '下午' : '晚上')} {curHour}:{curMinute.toString().padStart(2, '0')}
        </p>
      )
    }
    else if (isYesterday) {
      return (
        <p className='text-xs text-center text-gray-400'>
          昨天 {curHour}:{curMinute.toString().padStart(2, '0')}
        </p>
      )
    }
    else {
      return (
        <p className='text-xs text-center text-gray-400'>
          {curDate.format('YYYY/MM/DD HH:mm').toLocaleString()}
        </p>
      )
    }
  }
  return null
}

export default RenderTime
