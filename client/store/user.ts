import { create } from 'zustand'

interface userStoreState {
  username: string
  password: string
}

const useUserStore = create<userStoreState>(set => ({
  username: 'asd',
  password: '123',
}))

export default useUserStore
