'use client'
import React, { useState } from 'react'
import { wallpapers } from '@/lib'
import { themeStore, userStore } from '@/store'

export default function Login(props: any) {
  const [password, setPassword] = useState('')
  const [sign, setSign] = useState('Click to enter')
  const dark = themeStore(state => state.dark)
  const setTheme = themeStore(state => state.setDark)
  const pwd = userStore(state => state.password)

  const loginHandle = () => {}
  const keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key
    if (keyCode === 'Enter')
      loginHandle()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  return (
    <div
      className="w-full h-full text-center login"
      style={{
        background: `url(${
          dark ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`,
      }}
      onClick={() => loginHandle()}
    >
      <div className="relative inline-block w-auto -mt-40 top-1/2">
        {/* Avatar */}
        <img
          className="w-24 h-24 mx-auto my-0 rounded-full"
          src={''}
          alt="img"
        />
        <div className="mt-2 text-xl font-semibold text-white">{'luo'}</div>

        {/* Password Input */}
        <div className="grid h-8 grid-cols-5 mx-auto mt-4 rounded-md w-44 backdrop-blur-2xl bg-gray-300/50">
          <input
            className="col-span-4 col-start-1 px-2 text-sm text-white bg-transparent no-outline"
            type="password"
            placeholder="Enter Password"
            onClick={e => e.stopPropagation()}
            onKeyPress={keyPress}
            value={password}
            onChange={handleInputChange}
          />
          <div className="col-span-1 col-start-5 flex-center">
            <span className="ml-1 text-white i-bi:question-square-fill" />
          </div>
        </div>

        <div className="mt-2 text-sm text-gray-200 cursor-pointer">{sign}</div>
      </div>
    </div>
  )
}
