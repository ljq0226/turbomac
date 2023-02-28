import { create } from 'zustand'

interface controlState {
  date: Date
  wifi: boolean
  showControlCenter: boolean
  showWifiMenu: boolean
  showAppleMenu: boolean
  wifiSwitch: (value: boolean) => void
  appleMenuSwitch: (value: boolean) => void
  wifiMenuSwitch: (value: boolean) => void
  controlCenterSwitch: (value: boolean) => void

}

const useControlStore = create<controlState>(set => ({
  date: new Date(),
  wifi: true,
  showControlCenter: false,
  showWifiMenu: false,
  showAppleMenu: false,
  wifiSwitch: value => set(() => ({ wifi: value })),
  appleMenuSwitch: value => set(() => ({ showAppleMenu: value })),
  wifiMenuSwitch: value => set(() => ({ showWifiMenu: value })),
  controlCenterSwitch: value => set(() => ({ showControlCenter: value })),
}))

export default useControlStore
