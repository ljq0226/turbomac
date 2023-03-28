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

      if (x < 32 && y > screenHeight - 32)
        setShow(true)
      else if (x < 32 && y < 32)
        setShow(true)
      else if (x > screenWidth - 32 && y < 32)
        setShow(true)
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
