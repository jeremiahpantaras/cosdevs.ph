import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { SERVICES, servicePath } from '../../data/services'
import { projectsForService } from '../../data/projects'

/** Numbered editorial list of the four core services, each linking to projects that demonstrate it. */
export default function ServiceList({ detailed = false }) {
  return (
    <ol>
      {SERVICES.map((service, i) => {
        const examples = projectsForService(service.id).slice(0, 3)
        return (
          <Reveal as="li" key={service.id} className="grid gap-4 border-t border-mist py-8 first:border-t-0 first:pt-0 sm:grid-cols-[3.5rem_1fr]">
            <span className="type-label pt-2 text-slate">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="type-h3">
                <Link to={servicePath(service)} className="underline-offset-4 hover:underline">{service.title}</Link>
              </h3>
              <p className="mt-2 max-w-[56ch] text-slate">{service.summary}</p>
              {detailed && (
                <ul className="type-label mt-4 flex flex-wrap gap-x-4 gap-y-1 text-slate">
                  {service.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
              )}
              {examples.length > 0 && (
                <p className="mt-4 text-sm">
                  <span className="text-slate">Seen in: </span>
                  {examples.map((p, idx) => (
                    <span key={p.slug}>
                      {idx > 0 && ', '}
                      <Link to={`/work#${p.slug}`} className="font-semibold text-horizon underline underline-offset-4">{p.title}</Link>
                    </span>
                  ))}
                </p>
              )}
            </div>
          </Reveal>
        )
      })}
    </ol>
  )
}
