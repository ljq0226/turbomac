import { create } from 'zustand'
interface useUserStates {
  userInfo: {
    id: string
    username: string
    avatar: string
    role: string
    createAt?: Date
  }
  setUserInfo: (v: any) => void

}
const useUserStore = create<useUserStates>(set => ({
  userInfo: {
    id: '',
    username: '',
    avatar: '',
    role: '',
  },
  setUserInfo: (v: any) => set(s => ({
    userInfo: { ...s.userInfo, ...v },
  })),
}))

export default useUserStore
