import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion as Motion, useReducedMotion } from 'motion/react'
import SkipLink from './components/layout/SkipLink'
import SiteHeader from './components/layout/SiteHeader'
import SiteFooter from './components/layout/SiteFooter'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/aboutPage'
import WorkPage from './pages/workPage'
import ServicesPage from './pages/servicesPage'
import ContactPage from './pages/contactPage'
import NotFoundPage from './pages/NotFoundPage'
import { ScrollTrigger } from './lib/gsap'

// M9: route transition is opacity only, so layout and ScrollTrigger offsets never shift mid-fade.
function AnimatedRoutes() {
  const location = useLocation()
  const reduce = useReducedMotion()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Motion.main
        id="main"
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduce ? 0 : 0.2 }}
        onAnimationComplete={() => ScrollTrigger.refresh()}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Motion.main>
    </AnimatePresence>
  )
}

// Page height changes after first paint (lazy images, font swaps, route changes) would leave
// ScrollTrigger start/end positions stale, so re-measure whenever the document resizes.
function useScrollTriggerSync() {
  useEffect(() => {
    let timer
    const ro = new ResizeObserver(() => {
      clearTimeout(timer)
      timer = setTimeout(() => ScrollTrigger.refresh(), 200)
    })
    ro.observe(document.body)
    return () => {
      clearTimeout(timer)
      ro.disconnect()
    }
  }, [])
}

export default function App() {
  useScrollTriggerSync()
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <SkipLink />
        <ScrollToTop />
        <SiteHeader />
        <AnimatedRoutes />
        <SiteFooter />
      </MotionConfig>
    </BrowserRouter>
  )
}
