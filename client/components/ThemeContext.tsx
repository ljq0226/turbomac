'use client'
import { createContext } from 'react'

interface MyThemeContext {
  dark: boolean
  brightness?: number
}

const ThemeContext = createContext<MyThemeContext>({
  dark: false,
  brightness: 50,
})

export default ThemeContext
