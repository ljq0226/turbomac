import { create } from 'zustand'
import Help from '@/components/apps/Terminal/Util'

interface TerminalState {
  commandHistory: string[]
  setCommandHistory: (v: string) => void
  help: () => JSX.Element

}

const useTerminalStore = create<TerminalState>(set => ({
  commandHistory: [''],
  setCommandHistory: v => set(s => ({
    commandHistory: [...s.commandHistory, v],
  }
  )),
  help: () => (
    <Help />
  ),

}))

export default useTerminalStore
