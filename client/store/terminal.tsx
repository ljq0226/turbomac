import { create } from 'zustand'

interface TerminalState {
  currentId: number
  setCurrentId: (v: number) => void
  resetCurrentId: () => void

}

const useTerminalStore = create<TerminalState>(set => ({
  currentId: 0,
  setCurrentId: v => set(s => ({ currentId: s.currentId + v })),
  resetCurrentId: () => set(s => ({ currentId: 0 })),
}),
)

export default useTerminalStore
