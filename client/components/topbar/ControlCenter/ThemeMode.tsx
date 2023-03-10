import React from 'react'
import { Moon, Sun } from 'lucide-react'

interface Props {
  dark: boolean
  setDark: (v: boolean) => void
  bg: string
}

const ThemeMode = ({ dark, setDark, bg }: Props) => {
  return (
    <div
      className={`flex p-3 py-4 rounded-[13px] h-16 border shadow ${bg}`}
      onClick={() => setDark(!dark)}
    >
      <div
        className={`w-8 h-8 flex-center rounded-full ${dark ? 'bg-primary' : 'bg-gray-200'
          }`}
      >
        {dark ? <Moon size={16} /> : <Sun size={16} />}
      </div>
      <h2
        className={`align-middle py-[5px] pl-2 font-medium text-md ${dark ? 'text-white' : 'text-black'
          }`}
      >
        {dark ? 'Dark Mode' : 'Light Mode'}
      </h2>
    </div>
  )
}

export default ThemeMode
