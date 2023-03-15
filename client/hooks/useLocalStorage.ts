'use client'
import { useEffect } from 'react'

const useLocalStorage = (key: string, value?: any): any => {
  let item
  useEffect(() => {
    item = localStorage.getItem(key)
    if (!item)
      localStorage.setItem(key, value)
  }, [])

  return item
}

export default useLocalStorage
