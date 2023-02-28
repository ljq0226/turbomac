'use client'
import Desktop from './Desktop'
import Login from './Login'
import { userStore } from '@/store'
export default function Home() {
  const username = userStore(state => state.username)
  return <>{username ? <Desktop></Desktop> : <Login></Login>}</>
}
