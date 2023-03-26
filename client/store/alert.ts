import { create } from 'zustand'

interface alertState {
  show: boolean
  type: string
  content: string
  duration: number
  setShow: (v: boolean) => void
  useAlert: (type: string, content: string, duration?: number, show?: boolean) => void
}

const useAlertStore = create<alertState>(set => ({
  show: false,
  type: 'success',
  content: '',
  duration: 2000,
  setShow: v => set(s => ({
    show: v,
  })),
  useAlert: (type, content, duration = 2000, show = true) => set(s => ({
    show,
    type,
    content,
    duration,
  })),

}))

export default useAlertStore
