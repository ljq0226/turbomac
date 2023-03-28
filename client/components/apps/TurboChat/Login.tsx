'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { shallow } from 'zustand/shallow'
import type { LoginData } from 'api/login'
import { Login } from 'api/login'
import { useAlertStore, useAppsStore } from '@/store'
const LoginWindow = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(true)
  const [openApp, closeApp] = useAppsStore(s => [s.openApp, s.closeApp], shallow)
  const useAlert = useAlertStore(s => s.useAlert)
  useEffect(() => {
    const userInfo = { ...JSON.parse(localStorage.getItem('userInfo') as string) }
    if (userInfo)
      setUsername(userInfo.username)
  }, [])

  const loginHandler = async () => {
    try {
      const res = await Login({ username, password })
      const data = res.data as LoginData
      if (res.code === 200) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('userInfo', JSON.stringify(data.userInfo))
        useAlert('success', res.msg)
        closeApp('login')
        openApp('turbochat')
      }
    }
    catch (error) {
      useAlert('warning', '服务器已满,请本地运行!')
    }
  }

  return (
    <>
      <div className='flex flex-col w-full h-full space-y-4 overflow-hidden bg-center bg-cover rounded-b-md p-[32px]'
        style={{
          backgroundImage: 'url(/img/ui/loginbg.png',
        }}
      >

        <div className='mt-[32px] mb-[12px] flex-center'>
          <Image src='/img/icons/turbochat.png' className='bg-white rounded-full' width={80} height={80} alt='qqavatar' />
        </div>

        <div className='h-[42px] flex text-black font-black'>
          <div className='h-full w-[60px] bg-white  flex-center'></div>
          <input type="text" placeholder='Username'
            className='h-full w-[130px] text-lg focus:outline-none' value={username} onChange={(e) => {
              setUsername(e.target.value)
            }} />
          <div className='h-full w-[60px] bg-white'></div>
        </div>
        <div className='h-[42px] flex text-black font-bold'>
          <div className='h-full w-[60px] bg-white  flex-center'> </div>
          <input type="password" placeholder='Password'
            className='h-full w-[130px] text-lg focus:outline-none' value={password}
            onChange={(e) => {
              e.preventDefault()
              setPassword(e.target.value)
            }}
          />
          <div className='h-full w-[60px] bg-white'></div>
        </div>
        <div className='text-[12px] flex justify-start items-center text-[#999]'>
          <div className={`flex-center w-4 h-4 border-[1px] mr-1 border-[#b2c1cb] rounded-full  text-white  ${check ? 'bg-[#0099ff]' : ''}`}
            onClick={() => setCheck(!check)}
          >{check ? '√' : ''}</div>
          已阅读并同意
          <span className='text-primary hover:cursor-pointer'>服务协议</span>
          和
          <span className='text-primary hover:cursor-pointer'>隐私保护指引</span>
        </div>
        <div className=''>
          <button
            onClick={(e) => {
              e.preventDefault()
              loginHandler()
            }}
            className={`rounded-lg w-[256px] h-[38px] text-white cursor-pointer ${(!!username && !!password) ? 'bg-[#0099ff]' : 'bg-[#a7dbfe]'}`}>Log In / Sign Up</button>
        </div>
        <div className='w-full h-auto  pt-[20px] flex-center'>
          <span className='text-xs text-primary hover:cursor-pointer'>扫码登录</span>
          <span className='mx-2'>|</span>
          <span className='text-xs text-primary hover:cursor-pointer '>更多选项</span>
        </div>
      </div>
    </>

  )
}

export default LoginWindow
