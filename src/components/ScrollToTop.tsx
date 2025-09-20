import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop component that automatically scrolls to the top of the page
 * when the route changes. This ensures users start at the top of each new page.
 */
function ScrollToTop(): null {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0)
  }, [pathname])

  // This component doesn't render anything
  return null
}

export default ScrollToTop
