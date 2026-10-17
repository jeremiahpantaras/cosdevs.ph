/**
 * Core services and supporting capabilities.
 * `id` links services to projects (see projects.js). `slug` is the detail-page path under /services.
 * `intro` and the meta fields are written only from facts already on the site: no outcomes, clients or figures.
 */
export const SERVICES = [
  {
    id: 'software',
    slug: 'custom-software',
    title: 'Custom software',
    h1: 'Custom software development',
    metaTitle: 'Custom software development — Elpisoft',
    metaDescription:
      'Internal systems, dashboards and platforms built around how your team works, from discovery and planning to launch and ongoing support.',
    summary:
      'Systems built around how your team actually works: internal tools, dashboards and platforms designed to last for years, not weeks.',
    intro:
      'Off-the-shelf tools rarely fit the way a team actually works. We design and build software around your process, so it is useful, dependable and ready to grow. We start by understanding the problem, agree a focused plan, and keep you involved as we build.',
    deliverables: ['Internal systems', 'Dashboards and reporting', 'Platforms and integrations'],
  },
  {
    id: 'web',
    slug: 'web-applications',
    title: 'Web applications',
    h1: 'Web application development',
    metaTitle: 'Web application development — Elpisoft',
    metaDescription:
      'Responsive, accessible web applications and portals that are straightforward to use and to maintain, with examples of web products Elpisoft has built.',
    summary:
      'Responsive, accessible web applications that are straightforward to use, and straightforward for your team to maintain.',
    intro:
      'A web application should be easy for people to use and easy for your team to look after. We build responsive, accessible applications, from portals and dashboards to public-facing products, and we stay on to support them after launch.',
    deliverables: ['Web apps and portals', 'Marketing and product sites', 'Admin consoles'],
  },
  {
    id: 'mobile',
    slug: 'mobile-apps',
    title: 'Mobile apps',
    h1: 'Mobile app development',
    metaTitle: 'Mobile app development — Elpisoft',
    metaDescription:
      'Native and cross-platform apps for iOS and Android, built for the people who use them every day, including an Android SMS gateway and a mobile game.',
    summary: 'Native and cross-platform apps for iOS and Android, built for the people who will use them every day.',
    intro:
      'Mobile apps are used in short, frequent moments, so they have to be clear and dependable. We build native and cross-platform apps for iOS and Android, and we can create companion apps that work alongside the systems you already have.',
    deliverables: ['Android and iOS apps', 'Cross-platform builds', 'Companion apps for existing systems'],
  },
  {
    id: 'automation',
    slug: 'business-automation',
    title: 'Business automation',
    h1: 'Business automation',
    metaTitle: 'Business automation services — Elpisoft',
    metaDescription:
      'Workflow automation and systems integration that take repetitive manual work off your team, with examples from Elpisoft’s own projects.',
    summary:
      'Connect the systems you already have and take repetitive manual work off your team, so they can focus on the work that needs people.',
    intro:
      'Much of the work in a business is repetition: copying data between systems, producing documents, sending messages. We connect the tools you already use and automate those steps, so your team can spend its time on the work that needs people.',
    deliverables: ['Workflow automation', 'Systems integration', 'Document and data processing'],
  },
]

export const SUPPORTING_CAPABILITIES = [
  { id: 'design', title: 'UI/UX and product design' },
  { id: 'support', title: 'Maintenance and support' },
  { id: 'cloud', title: 'Cloud and DevOps' },
]

export const servicePath = (service) => `/services/${service.slug}`
