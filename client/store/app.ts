import { create } from 'zustand'

interface appsState {
  max: string // the maximize APP's id
  showApps: string[] // the whole opening app list
  minimizeApps: string[] // to store the minimized apps' id
  focus: string // the focusing app id
  openApp: (id: string) => void
  closeApp: (id: string) => void
  setMax: (id: string) => void
  setFocus: (id: string) => void
  addMinimizeApps: (id: string) => void
  removeMinimizeApps: (id: string) => void

}

const useAppsStore = create<appsState>(set => ({
  max: '',
  focus: '',
  showApps: [],
  minimizeApps: [],
  openApp: id => set(s => ({
    showApps: (s.showApps.includes(id) ? [...s.showApps] : [...s.showApps, id]),
  })),
  closeApp: id => set(s => ({
    showApps: s.showApps.filter(app => app !== id),
  })),
  setMax: id => set(() => ({
    max: id,
  })),
  setFocus: id => set(() => ({
    focus: id,
  })),
  addMinimizeApps: id => set(s => ({
    minimizeApps: [...s.minimizeApps, id],
  })),
  removeMinimizeApps: id => set(s => ({
    minimizeApps: s.minimizeApps.filter(app => app !== id),
  })),
}))

export default useAppsStore
