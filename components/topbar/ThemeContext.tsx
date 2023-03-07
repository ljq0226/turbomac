import { createContext } from 'react'

interface MyThemeContext {
  dark: boolean
  brightness: number
}

const ThemeContext = createContext<MyThemeContext>({
  dark: false,
  brightness: 80,
})

export default ThemeContext
