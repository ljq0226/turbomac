import { create } from 'zustand'
import Help from '@/components/apps/Terminal/Help'

interface TerminalState {
  commondsHistory: string[]
  help: () => JSX.Element

}

const useTerminalStore = create<TerminalState>(set => ({
  commondsHistory: ['asd'],
  help: () => (
    <Help />
  ),

}))

export default useTerminalStore
