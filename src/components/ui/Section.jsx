import Container from './Container'

const SURFACES = {
  cloud: 'bg-cloud text-navy',
  white: 'bg-white text-navy',
  navy: 'bg-navy text-white on-dark',
  deep: 'bg-deep-navy text-white on-dark',
}

/** Page band with a brand surface and consistent vertical rhythm (64 / 96 / 128px). */
export default function Section({ surface = 'cloud', className = '', contained = true, children, ...rest }) {
  return (
    <section className={`relative ${SURFACES[surface]} py-16 md:py-24 xl:py-32 ${className}`} {...rest}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  )
}
