import Section from '../../ui/Section'
import Eyebrow from '../../ui/Eyebrow'
import Button from '../../ui/Button'
import Reveal from '../../ui/Reveal'
import ProjectCard from '../../ui/ProjectCard'
import { FEATURED_PROJECTS, PROJECTS } from '../../../data/projects'

export default function FeaturedWork() {
  return (
    <Section surface="deep" aria-labelledby="work-heading">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Eyebrow tone="dark">02 — Selected work</Eyebrow>
          <h2 id="work-heading" className="type-h1 mt-5">Selected work</h2>
          <p className="type-body-lg mt-4 max-w-[48ch] text-white/75">
            A few of the products we have designed, built and shipped.
          </p>
        </div>
        <Button to="/work" variant="outline-dark" arrow className="self-start md:self-auto">
          See all {PROJECTS.length} projects
        </Button>
      </Reveal>

      <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {FEATURED_PROJECTS.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
