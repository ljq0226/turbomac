import type { UserInfo } from 'types/configs/user'
import { create } from 'zustand'
interface useUserStates {
  userInfo: UserInfo
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
