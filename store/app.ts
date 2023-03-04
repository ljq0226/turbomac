import { create } from 'zustand'

interface appsState {
  safari: boolean
  vscode: boolean

  max: string // the maximize APP's id

  showApps: string[]
  openApp: (id: string) => void
  closeApp: (id: string) => void
  setMax: (id: string) => void
}

const useAppsStore = create<appsState>(set => ({
  safari: false,
  vscode: true,
  max: '',
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
}))

export default useAppsStore
