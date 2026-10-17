import PageMeta from '../components/layout/PageMeta'
import PageIntro from '../components/ui/PageIntro'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import ServiceList from '../components/ui/ServiceList'
import ClosingCta from '../components/sections/ClosingCta'
import { SUPPORTING_CAPABILITIES } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services"
        path="/services"
        description="Custom software, web applications, mobile apps and business automation from Elpisoft, a software studio in Bacolod City, Philippines."
      />
      <PageIntro eyebrow="01 — Services" title="What we build">
        Dependable software for teams that want to move forward with confidence. Most projects combine more than one of the services below.
      </PageIntro>

      <Section surface="white" aria-labelledby="core-services">
        <h2 id="core-services" className="sr-only">Core services</h2>
        <div className="lg:ml-[calc(100%/12*3)]">
          <ServiceList detailed />
        </div>
        <Reveal className="mt-12 border-t border-mist pt-8 lg:ml-[calc(100%/12*3)]">
          <h2 className="type-h3">Supporting capabilities</h2>
          <p className="mt-2 max-w-[56ch] text-slate">
            Alongside the work above, we also provide the design, hosting and care that keep a product useful after launch.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SUPPORTING_CAPABILITIES.map((c) => (
              <li key={c.id} className="rounded-control border border-mist px-3 py-1.5 text-sm font-medium">{c.title}</li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <ClosingCta heading="Let’s talk about what you need." />
    </>
  )
}
