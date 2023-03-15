import { create } from 'zustand'

interface themeState {
  dark: boolean
  brightness: number
  sound: number
  color: string
  setDark: (value: boolean) => void
  setBrightness: (value: number) => void
  setSound: (value: number) => void
  setColor: (value: string) => void
}

const themeStore = create<themeState>(set => ({
  dark: true,
  brightness: 50,
  sound: 80,
  color: '#5388fc',
  setDark: value => set(() => ({ dark: value })),
  setBrightness: value => set(() => ({ brightness: value })),
  setSound: value => set(() => ({ sound: value })),
  setColor: value => set(() => ({ color: value })),
}))

export default themeStore
