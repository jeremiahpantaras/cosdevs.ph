import Container from './Container'
import Eyebrow from './Eyebrow'
import Breadcrumbs from './Breadcrumbs'

/** Opening band of an inner page: one H1, a short lead and consistent top spacing under the fixed header. */
export default function PageIntro({ eyebrow, title, crumbs, children }) {
  return (
    <section className="bg-cloud pb-12 pt-32 md:pb-16 md:pt-40">
      <Container>
        {crumbs && <div className="mb-6"><Breadcrumbs crumbs={crumbs} /></div>}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="type-h1 mt-5 max-w-[22ch]">{title}</h1>
        {children && <div className="type-body-lg mt-5 max-w-[60ch] text-slate">{children}</div>}
      </Container>
    </section>
  )
}
