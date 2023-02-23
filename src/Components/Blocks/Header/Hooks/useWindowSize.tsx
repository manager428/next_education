import { useEffect, useState } from 'react'

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined'

  function getWindowDimensions() {
    const width = hasWindow ? window.screen.availWidth : null
    return {
      width,
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return windowDimensions
}
