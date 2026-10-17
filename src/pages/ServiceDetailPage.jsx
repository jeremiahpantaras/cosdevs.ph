import PageIntro from '../components/ui/PageIntro'
import Section from '../components/ui/Section'
import Eyebrow from '../components/ui/Eyebrow'
import Reveal from '../components/ui/Reveal'
import ProjectCard from '../components/ui/ProjectCard'
import Approach from '../components/sections/home/Approach'
import ClosingCta from '../components/sections/ClosingCta'
import { projectsForService } from '../data/projects'
import { servicePath } from '../data/services'

/**
 * One page per core service. Every block is drawn from facts already on the site (the service's own copy,
 * the real projects tagged with it, and the delivery process), so nothing here is invented.
 */
export default function ServiceDetailPage({ service }) {
  const projects = projectsForService(service.id)
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title={service.h1}
        crumbs={[{ name: 'Services', path: '/services' }, { name: service.h1, path: servicePath(service) }]}
      >
        {service.intro}
      </PageIntro>

      <Section surface="white" aria-labelledby="includes-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <Eyebrow>What this includes</Eyebrow>
            <h2 id="includes-heading" className="type-h2 mt-5">What we can build for you</h2>
          </Reveal>
          <ul className="lg:col-span-7 lg:col-start-6">
            {service.deliverables.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.05} className="border-t border-mist py-5 first:border-t-0 first:pt-0">
                <h3 className="type-h3">{item}</h3>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {projects.length > 0 && (
        <Section surface="deep" aria-labelledby="projects-heading">
          <Reveal>
            <Eyebrow tone="dark">Our work</Eyebrow>
            <h2 id="projects-heading" className="type-h1 mt-5">Projects that show this work</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Approach surface="cloud" eyebrow="How a project runs" heading="A clear process, with no surprises" />
      <ClosingCta heading={`Need ${service.title.toLowerCase()}?`} />
    </>
  )
}
