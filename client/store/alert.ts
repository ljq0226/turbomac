import { create } from 'zustand'

interface alertState {
  show: boolean
  type: string
  content: string
  setShow: (v: boolean) => void
  useAlert: (type: string, content: string, show?: boolean) => void
}

const useAlertStore = create<alertState>(set => ({
  show: false,
  type: 'success',
  content: '',
  setShow: v => set(s => ({
    show: v,
  })),
  useAlert: (type, content, show = true) => set(s => ({
    show,
    type,
    content,
  })),

}))

export default useAlertStore
