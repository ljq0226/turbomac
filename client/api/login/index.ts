import { post } from '@/lib/http'

interface AuthInfo { username: string; password: string }
export interface LoginData {
  token: string
  userInfo: {
    id: string
    username: string
    avatar: string
    role: string
    createAt?: Date
  }
}
export function Login({ username, password }: AuthInfo) {
  return post('login', { username, password })
}
