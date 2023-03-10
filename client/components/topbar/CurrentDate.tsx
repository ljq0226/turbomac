'use client'
import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../ThemeContext'
import { dayjs } from '@/lib'

const CurrentDate = () => {
  const [time, setTime] = useState(new Date())
  const { dark } = useContext(ThemeContext)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={dark ? 'text-white ' : ''}>
      {/* {time.toLocaleTimeString()} */}
      {dayjs(time).format('MMMD日 ddd HH:mm')}
    </div>
  )
}
export default CurrentDate
