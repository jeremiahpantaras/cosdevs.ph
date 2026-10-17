import { useRef } from 'react'
import Section from '../../ui/Section'
import Eyebrow from '../../ui/Eyebrow'
import Reveal from '../../ui/Reveal'
import { PROCESS } from '../../../data/process'
import { gsap, ScrollTrigger, useGSAP } from '../../../lib/gsap'

const MIST = '#E4E1D9'
const AMBER = '#FFB020'

/** Process on a "horizon" line. Default (no JS / reduced motion): full line, all steps active. */
export default function Approach({ surface = 'cloud', eyebrow = '03 — How we work', heading = 'A clear process, with no surprises' }) {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // M6: the line fills as the section scrolls past; each dot lights when its step is reached.
      // Horizontal on desktop (scaleX), vertical below 1024px (scaleY): two conditions so a resize re-runs the setup.
      const setup = (prop) => () => {
        const q = gsap.utils.selector(root)
        const dots = q('[data-dot]')
        gsap.set(dots, { backgroundColor: MIST })

        const line = gsap.fromTo(
          q('[data-line-fill]'),
          { [prop]: 0 },
          { [prop]: 1, ease: 'none', scrollTrigger: { trigger: q('[data-track]')[0], start: 'top 70%', end: 'bottom 60%', scrub: true } },
        )
        const steps = q('[data-step]').map((step, i) => {
          const tween = gsap.to(dots[i], { backgroundColor: AMBER, duration: 0.3, paused: true })
          const st = ScrollTrigger.create({
            trigger: step,
            start: 'top 65%',
            onEnter: () => tween.play(),
            onLeaveBack: () => tween.reverse(),
          })
          return { tween, st }
        })

        return () => {
          line.scrollTrigger?.kill()
          line.kill()
          steps.forEach(({ tween, st }) => { st.kill(); tween.kill() })
        }
      }

      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', setup('scaleX'))
      mm.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)', setup('scaleY'))

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <Section surface={surface} aria-labelledby="approach-heading">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id="approach-heading" className="type-h2 mt-5 max-w-[28ch]">{heading}</h2>
      </Reveal>

      <div ref={root} className="mt-12">
        <ol data-track className="relative grid gap-10 lg:grid-cols-3 lg:gap-8">
          <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-[2px] bg-mist lg:bottom-auto lg:left-0 lg:right-0 lg:top-[7px] lg:h-[2px] lg:w-auto" />
          <span
            aria-hidden="true"
            data-line-fill
            className="absolute bottom-2 left-[7px] top-2 w-[2px] origin-top bg-amber lg:bottom-auto lg:left-0 lg:right-0 lg:top-[7px] lg:h-[2px] lg:w-auto lg:origin-left"
          />
          {PROCESS.map((step) => (
            <li key={step.number} data-step className="relative pl-10 lg:pl-0 lg:pt-12">
              <span aria-hidden="true" data-dot className="absolute left-0 top-1 size-4 rounded-full bg-amber lg:top-0" />
              <p className="type-label text-slate">{step.number}</p>
              <h3 className="type-h3 mt-2">{step.title}</h3>
              <p className="mt-3 max-w-[40ch] text-slate">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
