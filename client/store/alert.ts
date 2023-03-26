import { create } from 'zustand'

interface alertState {
  show: boolean
  type: string
  content: string
  setShow: (v: boolean) => void
  setType: (v: string) => void
  setContent: (v: string) => void
}

const useAlertStore = create<alertState>(set => ({
  show: true,
  type: 'success',
  content: '',
  setShow: v => set(s => ({
    show: v,
  })),
  setType: v => set(s => ({
    type: v,
  })),
  setContent: v => set(s => ({
    content: v,
  })),

}))

export default useAlertStore
