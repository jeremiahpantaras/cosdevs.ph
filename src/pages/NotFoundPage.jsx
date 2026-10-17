import Section from '../components/ui/Section'
import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <>
      <Section surface="cloud" className="flex min-h-[70svh] items-center pt-32">
        <div>
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="type-h1 mt-5">We could not find that page</h1>
          <p className="type-body-lg mt-5 max-w-[48ch] text-slate">
            The link may be out of date, or the page may have moved. Here are a few places to go next.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/" variant="navy">Back to home</Button>
            <Button to="/work" variant="outline">See our work</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
