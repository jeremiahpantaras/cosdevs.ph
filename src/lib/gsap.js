import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

// Register once; every GSAP import in the app goes through this module.
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export const NO_MOTION_PREF = '(prefers-reduced-motion: no-preference)'
export const DESKTOP_MOTION = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'

/** Resolves once web fonts are ready (or after a short timeout) so SplitText measures final glyphs. */
export const fontsReady = () =>
  Promise.race([
    document.fonts?.ready ?? Promise.resolve(),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ])

/** True when any part of the element is in the viewport (above ~92% of its height). */
export const inViewport = (el) => {
  const r = el.getBoundingClientRect()
  return r.bottom > 0 && r.top < window.innerHeight * 0.92
}

/**
 * Safety net for scroll-triggered entrances: if the element is already on screen after `ms` but its
 * ScrollTrigger never started the tween, play it anyway so nothing is left hidden. Returns a cleanup.
 */
export function failSafePlay(el, tween, ms = 1200) {
  const t = setTimeout(() => {
    if (tween.progress() === 0 && inViewport(el)) {
      tween.scrollTrigger?.kill()
      tween.play()
    }
  }, ms)
  return () => clearTimeout(t)
}

export { gsap, ScrollTrigger, SplitText, useGSAP }
