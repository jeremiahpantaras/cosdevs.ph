import { useRef } from 'react'
import Container from '../../ui/Container'
import Button from '../../ui/Button'
import SunriseMark from '../../brand/SunriseMark'
import { gsap, SplitText, useGSAP, NO_MOTION_PREF, DESKTOP_MOTION, fontsReady } from '../../../lib/gsap'
import { BRAND } from '../../../config/brand'

export default function HomeHero() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // M1: hero intro. Initial states are set here (before paint), so without JS or with reduced
      // motion nothing is hidden and the section is simply complete.
      mm.add(NO_MOTION_PREF, () => {
        const q = gsap.utils.selector(root)
        const [title] = q('[data-hero-title]')
        let cancelled = false
        let split
        let tl

        gsap.set(q('[data-hero-label], [data-hero-body], [data-hero-cta]'), { autoAlpha: 0, y: 12 })
        gsap.set(title, { autoAlpha: 0 })
        gsap.set(q('[data-sun]'), { y: 46 }) // below the horizon clip
        gsap.set(q('[data-bowl]'), { autoAlpha: 0 })

        fontsReady().then(() => {
          if (cancelled) return
          split = SplitText.create(title, { type: 'lines', mask: 'lines' })
          tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
          tl.to(q('[data-hero-label]'), { autoAlpha: 1, y: 0, duration: 0.5 }, 0)
            .set(title, { autoAlpha: 1 }, 0.05)
            .from(split.lines, { yPercent: 110, duration: 0.9, stagger: 0.08 }, 0.1)
            .to(q('[data-sun]'), { y: 0, duration: 1.4, ease: 'power2.out' }, 0.2)
            .to(q('[data-hero-body]'), { autoAlpha: 1, y: 0, duration: 0.6 }, 0.45)
            .to(q('[data-hero-cta]'), { autoAlpha: 1, y: 0, duration: 0.6 }, 0.55)
            .to(q('[data-bowl]'), { autoAlpha: 1, duration: 0.8 }, 0.6)
        })

        return () => {
          cancelled = true
          tl?.kill()
          split?.revert()
        }
      })

      // M2: the whole mark drifts upward as one rigid piece while the hero scrolls away (desktop only).
      mm.add(DESKTOP_MOTION, () => {
        const tween = gsap.to(root.current.querySelector('[data-drift]'), {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 0.5 },
        })
        return () => { tween.scrollTrigger?.kill(); tween.kill() }
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section ref={root} className="relative flex min-h-[min(100svh,880px)] items-center overflow-hidden bg-cloud pb-16 pt-28 md:pt-32 lg:pb-28 lg:pt-40">
      <Container>
        <div className="relative z-10 max-w-[600px]">
          <ul data-hero-label className="type-label flex flex-wrap gap-y-1 text-slate">
            {['Custom software', 'Web', 'Mobile', 'Automation'].map((item) => (
              <li key={item} className="after:mx-3 after:content-['·'] last:after:content-none">{item}</li>
            ))}
          </ul>
          <h1 data-hero-title className="type-display mt-6">{BRAND.tagline}</h1>
          <p data-hero-body className="type-body-lg mt-6 max-w-[46ch] text-slate">
            We design and engineer dependable products that help teams move forward with confidence.
          </p>
          <div data-hero-cta className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/work" variant="navy">See our work</Button>
            <Button to="/contact" variant="outline">Talk to us</Button>
          </div>
        </div>

        <div className="pointer-events-none mt-14 flex justify-end lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[min(52vw,760px)] lg:-translate-y-[45%] lg:translate-x-[9%]">
          <div data-drift className="-mr-10 w-[280px] sm:w-[360px] lg:mr-0 lg:w-full">
            <SunriseMark className="block h-auto w-full" />
          </div>
        </div>
      </Container>
    </section>
  )
}
