import { create } from 'zustand'

interface userStoreState {
  username: string
  qq: string
}

const useUserStore = create<userStoreState>(set => ({
  username: '',
  qq: '',
}))

export default useUserStore
