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
  if (!prevMessage)
    return <p className='text-xs text-center text-gray-400'>{dayjs(new Date(message.createdAt)).format('YYYY/MM/DD HH:mm').toLocaleString()}</p>

  const prevTime = new Date(prevMessage.createdAt).getTime()
  const curTime = new Date(message.createdAt).getTime()
  const nowTime = new Date().getTime()
  const ONE_MINUTE = 60 * 1000
  const curDate = dayjs(new Date(message.createdAt))
  const prevDate = dayjs(new Date(prevMessage.createdAt))
  const curHour = curDate.hour()
  const curMinute = curDate.minute()
  const curDay = curDate.date()
  const prevDay = prevDate.date()
  const curMonth = curDate.month()
  const prevMonth = prevDate.month()
  const curYear = curDate.year()
  const prevYear = prevDate.year()
  const isSameDay = (nowTime - curTime < 24 * 60 * ONE_MINUTE) && curDay === prevDay && curMonth === prevMonth && curYear === prevYear
  const isYesterday = curDay === prevDay + 1 && curMonth === prevMonth && curYear === prevYear
  const isAM = curHour < 12
  const isPM = curHour >= 12 && curHour < 19
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
