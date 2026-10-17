/**
 * Brand configuration for Elpisoft.
 * Single source of truth for identity, contact details and asset paths.
 * Naming rule (Brand Guidelines p3): "Elpisoft" in running text; lowercase "elpisoft" only inside logo artwork.
 */
export const BRAND = {
  name: 'Elpisoft',
  formerName: 'COS Devs',
  tagline: 'Software built on hope.',
  description:
    'Elpisoft is a custom software studio in Bacolod City, Philippines. We design and engineer dependable web, mobile and automation products that help teams move forward with confidence.',

  contact: {
    email: 'beacondevstudio@gmail.com',
    phone: '(+63) 908 560 8811',
    phoneRaw: '+639085608811',
    addressLine1: 'Bacolod City, Negros Island',
    addressLine2: 'Philippines, 6100',
  },

  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61582553202066',
    instagram: 'https://www.instagram.com/cosdevs/',
    linkedin: 'https://linkedin.com/company/cos-devsph',
  },

  // Current deployment URL. Update when the final domain is live (canonical, OG, sitemap, robots).
  siteUrl: 'https://cosdevsph.vercel.app',

  formspreeEndpoint: 'https://formspree.io/f/xovpdlzz',

  assets: {
    logoFullColor: '/brand/elpisoft_horizontal_full-color.svg',
    logoReversed: '/brand/elpisoft_horizontal_reversed.svg',
    symbol: '/brand/elpisoft_symbol_full-color.svg',
    ogImage: '/og-image.png',
  },
}
