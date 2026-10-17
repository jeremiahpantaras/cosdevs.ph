import { useRef } from 'react'
import { gsap, SplitText, useGSAP, NO_MOTION_PREF, fontsReady, failSafePlay } from '../../lib/gsap'

/**
 * Headline whose lines rise from behind a mask when scrolled into view (GSAP SplitText + ScrollTrigger),
 * following the pattern of the React Bits SplitText component but limited to the one effect we use.
 * Reduced motion: renders the heading untouched. Used sparingly — two headings in the whole site.
 */
export default function SplitHeading({ as = 'h2', className = '', children }) {
  const Tag = as
  const ref = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(NO_MOTION_PREF, () => {
        let cancelled = false
        let split
        let stopFailSafe
        fontsReady().then(() => {
          if (cancelled || !ref.current) return
          split = SplitText.create(ref.current, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: (self) => {
              const tween = gsap.from(self.lines, {
                yPercent: 100,
                duration: 0.8,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
              })
              stopFailSafe?.()
              stopFailSafe = failSafePlay(ref.current, tween)
              return tween
            },
          })
        })
        return () => {
          cancelled = true
          stopFailSafe?.()
          split?.revert()
        }
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return <Tag ref={ref} className={className}>{children}</Tag>
}
