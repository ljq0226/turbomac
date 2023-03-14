import { create } from 'zustand'

interface userStoreState {
  username: string
  password: string
}

const useUserStore = create<userStoreState>(set => ({
  username: '',
  password: '',
}))

export default useUserStore
