import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Library-mode routers do not restore scroll: reset to top on navigation, or scroll to the #hash target. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const raf = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
