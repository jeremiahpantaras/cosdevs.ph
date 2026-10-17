import HomeHero from '../components/sections/home/HomeHero'
import ServicesOverview from '../components/sections/home/ServicesOverview'
import FeaturedWork from '../components/sections/home/FeaturedWork'
import Approach from '../components/sections/home/Approach'
import Values from '../components/sections/home/Values'
import ClosingCta from '../components/sections/ClosingCta'

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <FeaturedWork />
      <Approach />
      <Values />
      <ClosingCta />
    </>
  )
}
