import { create } from 'zustand'

interface launchpadState {
  show: boolean
  setShow: (v: boolean) => void
}

const useLaunchpadStore = create<launchpadState>(set => ({
  show: false,
  setShow: v => set(() => ({ show: v })),
}))

export default useLaunchpadStore
