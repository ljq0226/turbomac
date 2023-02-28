import { create } from 'zustand'

interface userState {
  username: string
  password: string
}

const userStore = create<userState>(set => ({
  username: 'ljq',
  password: '',

}))

export default userStore
