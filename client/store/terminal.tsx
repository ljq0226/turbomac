import { create } from 'zustand'

interface TerminalState {
  currentId: number
  commandHistory: string[]
  changeCount: number
  path: string[]
  setCommandHistory: (v: string) => void
  setCurrentId: (v: number) => void
  setChangeCount: (v: number) => void
  setPath: (v: string) => void

}

const useTerminalStore = create<TerminalState>(set => ({
  currentId: 0,
  changeCount: 0,
  commandHistory: [],
  path: [],
  setCommandHistory: v => set(s => ({
    commandHistory: [...s.commandHistory, v],
  }
  )),
  setCurrentId: v => set(s => ({ currentId: s.currentId + v })),
  setChangeCount: v => set(s => ({ changeCount: s.changeCount + v })),
  setPath: (v: string) => set(s => ({ path: [...s.path], v })),

}))

export default useTerminalStore
