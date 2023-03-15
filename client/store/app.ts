import { create } from 'zustand'

interface appsState {

  max: string // the maximize APP's id
  showApps: string[] // the whole opening app list
  focus: string // the focusing app id
  openApp: (id: string) => void
  closeApp: (id: string) => void
  setMax: (id: string) => void
  setFocus: (id: string) => void

}

const useAppsStore = create<appsState>(set => ({
  max: '',
  focus: '',
  showApps: [],
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
}))

export default useAppsStore
