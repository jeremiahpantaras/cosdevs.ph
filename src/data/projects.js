import recivo from '../assets/images/optimized/recivo.webp'
import avendro from '../assets/images/optimized/avendro.webp'
import epuno from '../assets/images/optimized/epuno.webp'
import incognito from '../assets/images/optimized/incognito.webp'
import smsGateway from '../assets/images/optimized/sms-gateway.webp'
import pos from '../assets/images/optimized/pos.webp'
import satoru from '../assets/images/optimized/satoru.webp'
import sentinels from '../assets/images/optimized/sentinels.webp'
import tabang from '../assets/images/optimized/tabang.webp'

/**
 * All projects. Titles, descriptions, tags and links are carried over from the previous site.
 * imageKind: 'screenshot' fills the frame; 'logo' is centred on a neutral tile; null shows a text-only tile.
 * link: null means there is no public link to show.
 * services: which core services (see services.js) the project demonstrates, derived from its tags.
 */
export const PROJECTS = [
  {
    slug: 'recivo',
    title: 'Recivo',
    summary: 'Receipt generation for online sellers and business owners.',
    description:
      'A receipt generation platform designed for online sellers and business owners. Create, manage and share professional receipts in seconds, without manual paperwork.',
    tags: ['Receipt generation', 'E-commerce tool', 'Business automation'],
    image: recivo,
    imageKind: 'screenshot',
    imageAlt: 'Recivo receipt generator showing business details, items and a payment summary',
    link: 'https://recivo.elpisoft.com/',
    linkLabel: 'Visit site',
    featured: true,
    services: ['web', 'automation'],
  },
  {
    slug: 'avendro',
    title: 'Avendro',
    summary: 'A lending management system for lending institutions.',
    description:
      'A lending management system designed to streamline loan operations and financial management for lending institutions.',
    tags: ['Lending management', 'Loan operations', 'Financial systems'],
    image: avendro,
    imageKind: 'screenshot',
    imageAlt: 'Avendro marketplace home page connecting borrowers with lenders',
    link: 'https://avendrobcd.onrender.com/',
    linkLabel: 'Visit site',
    featured: true,
    services: ['software', 'web'],
  },
  {
    slug: 'epuno',
    title: 'ePuno',
    summary: 'A personal budget tracker for financial empowerment.',
    description:
      'More than a personal budget tracker: ePuno is the first entry in a conceptual, collaborative directory of open-source financial empowerment tools.',
    tags: ['FinTech', 'Budget tracking', 'Financial empowerment'],
    image: epuno,
    imageKind: 'screenshot',
    imageAlt: 'ePuno dashboard showing overall balance, monthly balance, income and expenses',
    link: 'https://epuno.elpisoft.com/',
    linkLabel: 'Visit site',
    featured: true,
    services: ['web'],
  },
  {
    slug: 'incognito',
    title: 'Incognito',
    summary: 'Anonymous messages through private, shareable links.',
    description:
      'A web application for sending and receiving anonymous messages through unique, shareable links. Designed for constructive feedback, honest suggestions and safe civic participation.',
    tags: ['Anonymous messaging', 'Feedback platform', 'Civic engagement'],
    image: incognito,
    imageKind: 'screenshot',
    imageAlt: 'Incognito home page with the headline "Receive anonymous messages safely"',
    link: 'https://incognito.elpisoft.com/',
    linkLabel: 'Visit site',
    featured: true,
    services: ['web'],
  },
  {
    slug: 'sms-gateway',
    title: 'SMS Gateway',
    summary: 'An Android app that turns a phone into an SMS gateway.',
    description:
      'An Android app (.APK) that turns a smartphone into an automated SMS gateway, using existing SIM promos and cellular allowances for cost-effective business messaging.',
    tags: ['Mobile application', 'SMS automation', 'Business communication'],
    image: smsGateway,
    imageKind: 'screenshot',
    imageAlt: 'SMS Gateway conversation and message-claim screens',
    link: null,
    linkLabel: 'Android app (.APK)',
    featured: false,
    services: ['mobile', 'automation'],
  },
  {
    slug: 'satoru',
    title: 'Satoru',
    summary: 'Summaries and key information from uploaded documents.',
    description:
      'A web application that summarises and extracts key information from uploaded documents, giving users quick, distilled insights.',
    tags: ['Document intelligence', 'Smart summarisation', 'Knowledge management'],
    image: satoru,
    imageKind: 'logo',
    imageAlt: 'Satoru logo',
    link: 'https://satoru-chi.vercel.app/',
    linkLabel: 'Visit site',
    featured: false,
    services: ['web', 'automation'],
  },
  {
    slug: 'point-of-sale',
    title: 'Point of Sale System',
    summary: 'Inventory, sales and customer management for retail.',
    description:
      'A point of sale system for retail businesses, with inventory management, sales tracking and customer management.',
    tags: ['Retail POS', 'Inventory management', 'Sales tracking'],
    image: pos,
    imageKind: 'screenshot',
    imageAlt: 'Point of sale storefront interface',
    link: null,
    linkLabel: 'No public link',
    featured: false,
    services: ['software', 'web'],
  },
  {
    slug: 'sentinels',
    title: 'Sentinels',
    summary: 'A multiplayer mobile game for cybersecurity education.',
    description:
      'A mobile game with multiplayer play, leaderboards and in-app purchases, focused on cybersecurity education.',
    tags: ['Cybersecurity education', 'Gamified learning', 'Mobile game'],
    image: sentinels,
    imageKind: 'logo',
    imageAlt: 'Sentinels logo',
    link: 'https://drive.google.com/file/d/1dB0u3wjIOWzKIGJtJPzDSgzceLOgFC2-/view',
    linkLabel: 'Download (Google Drive)',
    featured: false,
    services: ['mobile'],
  },
  {
    slug: 'student-management',
    title: 'Student Management System',
    summary: 'A dashboard for educational institutions.',
    description:
      'A dashboard for educational institutions with data visualisation, analytics and reporting tools for student management.',
    tags: ['Academic analytics', 'Institutional dashboard', 'Student management'],
    image: null,
    imageKind: null,
    imageAlt: '',
    link: 'https://sentinelsadmin.onrender.com/',
    linkLabel: 'Visit site',
    featured: false,
    services: ['software', 'web'],
  },
  {
    slug: 'tabang-negros',
    title: 'Tabang Negros',
    summary: 'Real-time emergency help requests for Negros Island.',
    description:
      'A real-time emergency help request system for Negros Island, Philippines. This full-stack web application lets people send emergency requests with their exact location to responders.',
    tags: ['Emergency response', 'Real-time dispatch', 'Public safety'],
    image: tabang,
    imageKind: 'logo',
    imageAlt: 'Tabang Negros logo over a satellite view of Negros Island',
    link: 'https://tabangnegros-installation.vercel.app/',
    linkLabel: 'Visit site',
    featured: false,
    services: ['web', 'software'],
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)
export const projectsForService = (serviceId) => PROJECTS.filter((p) => p.services.includes(serviceId))
