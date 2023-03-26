import { create } from 'zustand'
import type { ActiveUser, Message } from 'types'

interface useChatState {
  messages: Message
  // judge the new message is or not sent by you
  sentFlag: boolean
  activeUsers: ActiveUser[]
  page: number
  setSentFlag: (v: boolean) => void
  setMessages: (v: ActiveUser[]) => void
  setActiveUsers: (v: ActiveUser[]) => void
  setPage: (v: number) => void
}

const useChatStore = create<useChatState>(set => ({
  messages: [],
  sentFlag: false,
  activeUsers: [],
  page: 1,
  setActiveUsers: (v: ActiveUser[]) => set(s => ({
    activeUsers: v,
  })),
  setMessages: (v: Message[]) => set(s => ({
    messages: v,
  })),
  setSentFlag: (v: boolean) => set(s => ({
    sentFlag: v,
  })),
  setPage: (v: number) => set(s => ({
    page: v,
  })),
}))
export default useChatStore
