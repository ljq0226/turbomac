import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useLaunchpadStore } from '@/store'

function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timer: any = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let currentTime: any = new Date()
  return (...args) => {
    const nowTime: any = Date.now()
    if (nowTime - currentTime > delay) {
      func(...args)
      currentTime = Date.now()
    }
  }
}

const useMouseCorner = (callback: (show: boolean) => void): void => {
  const [show, setShow] = useLaunchpadStore(
    s => [s.show, s.setShow],
    shallow,
  )
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      const x = event.clientX
      const y = event.clientY

      if (x < 20 && y > (screenHeight * 9.5) / 10)
        setShow(true)
      // else if (x < 20 && y < 20)
      //   setShow(true)
      // else if (x > (screenWidth * 9.5) / 10 && y < 20)
      //   setShow(true)
      else if (x > (screenWidth * 9.5) / 10 && y > (screenHeight * 9.5) / 10)
        setShow(true)

      // else
      //   console.log('close false')
    }

    const handleMouseCorner = () => {
      if (show)
        callback(show)
    }

    document.addEventListener('mousemove', throttle(handleMouseMove, 800))
    document.addEventListener('mousemove', throttle(handleMouseCorner, 700))
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousemove', handleMouseCorner)
    }
  }, [])
}

export default useMouseCorner
