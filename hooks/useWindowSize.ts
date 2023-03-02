'use client'
import { useEffect, useState } from 'react'

export function useWindowSize() {
  let width = 800
  let height = 600
  // to resolve the window Object can't be find in server side
  if (typeof window !== 'undefined') {
    width = window.innerWidth
    height = window.innerHeight
  }
  const [state, setState] = useState({
    winWidth: width,
    winHeight: height,
  })

  useEffect(() => {
    const handler = () => {
      setState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })
    }

    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return state
}
