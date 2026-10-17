import { useLayoutEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { DUR } from '../../lib/motion'
import { inViewport } from '../../lib/gsap'

const EASE_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)'

/**
 * Restrained entrance for generic content: fades and rises into place once, when scrolled into view.
 *
 * Deliberately fail-safe. It is a CSS transition driven by our own visibility check (IntersectionObserver,
 * plus scroll/resize listeners and timed re-checks as backups), so content can never be left hidden if one
 * mechanism misfires, and it does not depend on Motion's presence context during route transitions.
 * With reduced motion it renders visible immediately. Never wrap a subtree that GSAP animates.
 */
export default function Reveal({ as = 'div', delay = 0, y = 16, className = '', style, children, ...rest }) {
  const Tag = as
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  const visible = shown || reduce

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || reduce) return undefined

    let done = false
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
    }
    function reveal() {
      if (done) return
      done = true
      cleanup()
      setShown(true)
    }

    io?.observe(el)
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    check()
    return cleanup
  }, [reduce])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translateY(${y}px)`,
        transition: reduce
          ? undefined
          : `opacity ${DUR.base}s ${EASE_CSS} ${delay}s, transform ${DUR.base}s ${EASE_CSS} ${delay}s`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
