import { create } from 'zustand'

interface appsState {
  safari: boolean
  vscode: boolean
  github: boolean

  openApps: string[]
  openApp: (id: string) => void
  closeApp: (id: string) => void
}

const useAppsStore = create<appsState>(set => ({
  safari: false,
  vscode: true,
  github: true,
  openApps: [],
  openApp: id => set(() => ({
    [id]: true,
  })),
  closeApp: id => set(() => ({
    [id]: false,
  })),
}))

export default useAppsStore
