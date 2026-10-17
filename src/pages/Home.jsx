import PageMeta from '../components/layout/PageMeta'
import HomeHero from '../components/sections/home/HomeHero'
import ServicesOverview from '../components/sections/home/ServicesOverview'
import FeaturedWork from '../components/sections/home/FeaturedWork'
import Approach from '../components/sections/home/Approach'
import Values from '../components/sections/home/Values'
import ClosingCta from '../components/sections/ClosingCta'
import { BRAND } from '../config/brand'

export default function Home() {
  return (
    <>
      <PageMeta home path="/" description={BRAND.description} />
      <HomeHero />
      <ServicesOverview />
      <FeaturedWork />
      <Approach />
      <Values />
      <ClosingCta />
    </>
  )
}
