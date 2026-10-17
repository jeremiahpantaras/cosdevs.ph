import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion as Motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Logo from '../brand/Logo'
import Button from '../ui/Button'
import { NAV_LINKS } from './nav'
import { DUR } from '../../lib/motion'

const linkClass = ({ isActive }) =>
  `relative py-2 text-[0.9375rem] font-medium text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-navy after:transition-transform after:duration-300 motion-reduce:after:transition-none ${
    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
  }`

export default function SiteHeader() {
  const reduce = useReducedMotion()
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  // M3: hide on scroll down, show on scroll up. Never hides under reduced motion or while the menu is open.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 8)
    setHidden(!reduce && !open && y > 120 && y > prev)
  })

  useEffect(() => setOpen(false), [pathname])

  // Menu: lock body scroll, trap focus, close on Escape, return focus to the toggle.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const panel = menuRef.current
    const focusables = () => panel.querySelectorAll('a[href], button:not([disabled])')
    focusables()[0]?.focus()
    const toggle = buttonRef.current
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key !== 'Tab') return
      // DOM order is: toggle, then the panel. Cycle toggle -> panel links -> toggle.
      const items = [toggle, ...focusables()]
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      toggle?.focus()
    }
  }, [open])

  return (
    <>
    <Motion.header
      animate={{ y: hidden ? '-100%' : 0 }}
      transition={{ duration: DUR.fast + 0.05, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b bg-cloud/90 backdrop-blur transition-colors duration-200 motion-reduce:transition-none ${
        scrolled || open ? 'border-mist' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 md:h-[72px] lg:px-8">
        <Link to="/" className="rounded-control" onClick={() => setOpen(false)}>
          <Logo height={32} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink key={to} to={to} className={linkClass}>{label}</NavLink>
          ))}
          <Button to="/contact" variant="primary">Start a project</Button>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="-mr-2 inline-flex size-12 items-center justify-center rounded-control text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
    </Motion.header>

      {/* M4: mobile menu. Sibling of the header: backdrop-filter and transforms on the header would
          otherwise become the containing block for this fixed panel. */}
      <AnimatePresence>
        {open && (
          <Motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-label="Menu"
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-cloud px-4 pb-10 pt-8 sm:px-6 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DUR.fast }}
          >
            <Motion.nav
              aria-label="Mobile"
              className="flex flex-col"
              initial={reduce ? false : { y: -8 }}
              animate={{ y: 0 }}
              transition={{ duration: DUR.fast + 0.05 }}
            >
              {NAV_LINKS.map(({ label, to }, i) => (
                <Motion.div
                  key={to}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: reduce ? 0 : 0.04 * i, duration: DUR.fast }}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `type-h2 block border-b border-mist py-4 ${isActive ? 'text-horizon' : 'text-navy'}`
                    }
                  >
                    {label}
                  </NavLink>
                </Motion.div>
              ))}
              <Button to="/contact" variant="primary" className="mt-8 w-full">Start a project</Button>
            </Motion.nav>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
