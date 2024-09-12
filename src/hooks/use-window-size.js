import { useState, useEffect } from 'react'

const useWindowSize = () => {
  // State to store the window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    // Handler to update state on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return windowSize
}

export default useWindowSize
