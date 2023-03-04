import { create } from 'zustand'

interface appsState {
  safari: boolean
  vscode: boolean

  openApps: string[]
  openApp: (id: string) => void
  closeApp: (id: string) => void
}

const useAppsStore = create<appsState>(set => ({
  safari: false,
  vscode: true,
  openApps: ['vscode'],
  openApp: id => set(s => ({
    [id]: true,
    openApps: [...s.openApps, id],
  })),
  closeApp: id => set(s => ({
    [id]: false,
    openApps: s.openApps.filter(app => app !== id),
  })),
}))

export default useAppsStore
