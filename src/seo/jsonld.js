import { BRAND } from '../config/brand'
import { absoluteUrl } from './routeMeta'

/**
 * JSON-LD for a route. Only facts that are already public on the site are used.
 * Organization.sameAs mirrors BRAND.socials, so it changes when the profile handles are renamed.
 * No ratings, reviews, awards, employee counts or LocalBusiness markup: there is no visitable location.
 */
const ORG_ID = `${BRAND.siteUrl}/#organization`
const SITE_ID = `${BRAND.siteUrl}/#website`

const organization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND.name,
  url: absoluteUrl('/'),
  logo: {
    '@type': 'ImageObject',
    url: `${BRAND.siteUrl}${BRAND.assets.logoPng}`,
    width: 512,
    height: 546,
  },
  description: BRAND.description,
  slogan: BRAND.tagline,
  email: BRAND.contact.email,
  telephone: BRAND.contact.phoneRaw,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bacolod City',
    addressRegion: 'Negros Occidental',
    postalCode: '6100',
    addressCountry: 'PH',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: BRAND.contact.email,
      telephone: BRAND.contact.phoneRaw,
      availableLanguage: ['English'],
    },
  ],
  sameAs: Object.values(BRAND.socials),
})

const website = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: BRAND.name,
  url: absoluteUrl('/'),
  inLanguage: 'en',
  publisher: { '@id': ORG_ID },
})

const breadcrumbs = (route) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...route.crumbs].map((crumb, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
})

const service = (route) => ({
  '@type': 'Service',
  '@id': `${absoluteUrl(route.path)}#service`,
  name: route.service.h1,
  serviceType: route.service.title,
  description: route.service.metaDescription,
  url: absoluteUrl(route.path),
  provider: { '@type': 'Organization', '@id': ORG_ID, name: BRAND.name, url: absoluteUrl('/') },
})

/** Returns an array of JSON-LD documents (possibly empty) for the route. */
export function buildJsonLd(route) {
  if (route.path === '/') {
    return [{ '@context': 'https://schema.org', '@graph': [organization(), website()] }]
  }
  const docs = []
  if (route.crumbs) docs.push({ '@context': 'https://schema.org', ...breadcrumbs(route) })
  if (route.service) docs.push({ '@context': 'https://schema.org', ...service(route) })
  return docs
}
