/**
 * Brand configuration for Elpisoft.
 * Single source of truth for identity, contact details and asset paths.
 * Naming rule (Brand Guidelines p3): "Elpisoft" in running text; lowercase "elpisoft" only inside logo artwork.
 */
/**
 * Email. The public mailbox is the Gmail account until email hosting is live.
 * When the hosted mailboxes exist: set EMAIL_HOSTING_LIVE to true, and also update the static "email" in the
 * JSON-LD block of index.html (it cannot read this file). Contact form notifications are configured in the
 * Formspree dashboard, not here.
 */
const EMAIL_HOSTING_LIVE = false
const EMAILS = {
  gmail: 'elpisoftph@gmail.com',
  // Hosted addresses, ready for when the domain mailboxes are created. Add others here as they are set up
  // (the brand guidelines also name brand@elpisoft.com).
  general: 'hello@elpisoft.com',
}

// One number serves calls and all messaging apps (WhatsApp, Telegram, Viber).
const PHONE = '+639085608811'
const PHONE_DIGITS = PHONE.replace(/\D/g, '')
// Telegram phone links only open a chat if the account's privacy settings allow it; a public username is
// more reliable. Set TELEGRAM_USERNAME (without @) once one exists.
const TELEGRAM_USERNAME = ''

export const BRAND = {
  name: 'Elpisoft',
  tagline: 'Software built on hope.',
  description:
    'Elpisoft is a custom software studio in Bacolod City, Philippines. We design and engineer dependable web, mobile and automation products that help teams move forward with confidence.',

  contact: {
    email: EMAIL_HOSTING_LIVE ? EMAILS.general : EMAILS.gmail,
    emails: EMAILS, // all known addresses, for pages that need a specific one (careers, brand, ...)
    phone: '(+63) 908 560 8811',
    phoneRaw: PHONE,
    // Chat links for the same number. Viber uses an app link (works where Viber is installed).
    messaging: [
      { id: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${PHONE_DIGITS}`, external: true },
      {
        id: 'telegram',
        label: 'Telegram',
        href: TELEGRAM_USERNAME ? `https://t.me/${TELEGRAM_USERNAME}` : `https://t.me/+${PHONE_DIGITS}`,
        external: true,
      },
      { id: 'viber', label: 'Viber', href: `viber://chat?number=%2B${PHONE_DIGITS}`, external: false },
    ],
    addressLine1: 'Bacolod City, Negros Island',
    addressLine2: 'Philippines, 6100',
  },

  // TEMPORARY handles: the Instagram and LinkedIn pages are being renamed to Elpisoft, so these point at the
  // expected new addresses. Confirm them once the accounts are renamed. They also feed Organization.sameAs.
  // (The Facebook link uses the page's numeric id, which stays valid when the page is renamed.)
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61582553202066',
    instagram: 'https://www.instagram.com/elpisoft/',
    linkedin: 'https://www.linkedin.com/company/elpisoft',
  },


  // Live domain. Also set statically in index.html (OG, Twitter, canonical, JSON-LD), public/sitemap.xml and public/robots.txt.
  siteUrl: 'https://www.elpisoft.com',

  formspreeEndpoint: 'https://formspree.io/f/xovpdlzz',

  assets: {
    logoFullColor: '/brand/elpisoft_horizontal_full-color.svg',
    logoReversed: '/brand/elpisoft_horizontal_reversed.svg',
    symbol: '/brand/elpisoft_symbol_full-color.svg',
    logoPng: '/brand/elpisoft-logo-512.png', // raster logo for structured data (Google needs >=112px)
    ogImage: '/og-image.png',
  },
}
