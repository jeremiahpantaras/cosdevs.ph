import { useLayoutEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { DUR } from '../../lib/motion'
import { inViewport } from '../../lib/gsap'
import { isHydrated } from '../../lib/hydration'

const EASE_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)'

/**
 * Restrained entrance for generic content: fades and rises into place once, when scrolled into view.
 *
 * Content is visible by default: the server-rendered markup and the first client render carry no inline
 * styles, so prerendered pages and no-JS visitors always see everything. After mount, content below the
 * viewport is hidden and revealed on scroll. Content already on screen is only animated when the app is past
 * its first (hydration) render, i.e. on client-side navigation, so it never flickers on first load.
 *
 * Deliberately fail-safe: our own visibility check (IntersectionObserver, plus scroll/resize listeners and
 * timed re-checks) means content cannot stay hidden if one mechanism misfires. With reduced motion nothing
 * is ever hidden. Never wrap a subtree that GSAP animates.
 */
export default function Reveal({ as = 'div', delay = 0, y = 16, className = '', style, children, ...rest }) {
  const Tag = as
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const [phase, setPhase] = useState('static') // static (plain) -> hidden -> shown

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || reduce) return undefined

    let done = false
    let raf
    const onScreen = inViewport(el)

    if (onScreen && !isHydrated()) {
      // First load of a prerendered page: already visible, leave it alone.
      return undefined
    }

    setPhase('hidden')

    const io = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => entries.some((e) => e.isIntersecting) && reveal(), { rootMargin: '0px 0px -8% 0px' })
      : null
    const timers = [250, 1000, 2500].map((ms) => setTimeout(check, ms))

    function check() {
      if (inViewport(el)) reveal()
    }
    function cleanup() {
      io?.disconnect()
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      timers.forEach(clearTimeout)
      cancelAnimationFrame(raf)
    }
    function reveal() {
      if (done) return
      done = true
      cleanup()
      setPhase('shown')
    }

    io?.observe(el)
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    // Let the hidden state paint once before checking, so on-screen content animates in instead of popping.
    raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(check)
    })
    return cleanup
  }, [reduce])

  const styles = {
    static: undefined,
    hidden: { opacity: 0, transform: `translateY(${y}px)`, transition: 'none' },
    shown: {
      opacity: 1,
      transform: 'none',
      transition: `opacity ${DUR.base}s ${EASE_CSS} ${delay}s, transform ${DUR.base}s ${EASE_CSS} ${delay}s`,
    },
  }

  return (
    <Tag ref={ref} className={className} style={{ ...style, ...styles[phase] }} {...rest}>
      {children}
    </Tag>
  )
}
