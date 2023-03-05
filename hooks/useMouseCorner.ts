import { useEffect } from 'react'
import { useLaunchpadStore } from '@/store'
import { debounce } from '@/lib/utils'

const useMouseCorner = () => {
  const setShow = useLaunchpadStore(
    s => s.setShow,
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
      else if (x > screenWidth - 32 && y > screenHeight - 32)
        setShow(true)
    }
    document.addEventListener('mousemove', debounce(handleMouseMove, 300))
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
}

export default useMouseCorner
