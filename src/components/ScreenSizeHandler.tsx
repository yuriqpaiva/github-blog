import { useEffect } from 'react'
import useScreenSizeStore from '../stores/useScreenSizeStore'

export function ScreenSizeHandler() {
  const setScreenSize = useScreenSizeStore((state) => state.setScreenSize)

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setScreenSize])

  return null
}
