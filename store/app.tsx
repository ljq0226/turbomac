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
  openApps: [],
  openApp: id => set(() => ({
    [id]: true,
  })),
  closeApp: id => set(() => ({
    [id]: false,
  })),
}))

export default useAppsStore
