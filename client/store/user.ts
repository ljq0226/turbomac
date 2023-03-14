import { create } from 'zustand'

interface userStoreState {
  username: string
  qq: string
}

const useUserStore = create<userStoreState>(set => ({
  username: 'asd',
  qq: '123',
}))

export default useUserStore
