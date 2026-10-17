import { Link } from 'react-router-dom'
import Section from '../../ui/Section'
import Eyebrow from '../../ui/Eyebrow'
import Reveal from '../../ui/Reveal'
import { MISSION, VISION, VALUES } from '../../../data/values'

export default function Values({ surface = 'white', eyebrow = '04 — What we believe', showNameNote = true, showVision = false }) {
  return (
    <Section surface={surface} aria-labelledby="values-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id="values-heading" className="type-h2 mt-5 max-w-[26ch]">{MISSION}</h2>
          {showVision && (
            <div className="mt-10 border-t border-mist pt-6">
              <p className="type-label text-slate">Vision</p>
              <p className="type-h3 mt-3 max-w-[30ch]">{VISION}</p>
            </div>
          )}
          {showNameNote && (
            <p className="mt-8 max-w-[48ch] text-slate">
              The name joins two words: <em className="not-italic font-semibold text-navy">Elpis</em>, Greek for hope, and{' '}
              <em className="not-italic font-semibold text-navy">Soft</em>, from software.{' '}
              <Link to="/about" className="text-horizon underline underline-offset-4">More about us</Link>
            </p>
          )}
        </Reveal>

        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-6">
          {VALUES.map((value, i) => (
            <Reveal as="li" key={value.number} delay={(i % 2) * 0.06} className="border-t border-mist pt-5">
              <p className="type-label text-slate">{value.number}</p>
              <h3 className="type-h3 mt-2">{value.title}</h3>
              <p className="mt-2 text-slate">{value.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
