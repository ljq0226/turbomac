'use client'
import { useEffect } from 'react'

const useLocalStorage = (key: string, value: string) => {
  useEffect(() => {
    const item = localStorage.getItem(key)
    if (!item)
      localStorage.setItem(key, value)
  }, [])

  return value
}

export default useLocalStorage
