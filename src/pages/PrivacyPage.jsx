import PageIntro from '../components/ui/PageIntro'
import Section from '../components/ui/Section'
import { BRAND } from '../config/brand'

const LAST_UPDATED = '17 October 2026'

const SECTIONS = [
  {
    heading: 'Who we are',
    body: [
      `${BRAND.name} is a software studio based in ${BRAND.contact.addressLine1}, ${BRAND.contact.addressLine2}. This page explains what personal information this website collects and why.`,
    ],
  },
  {
    heading: 'What we collect',
    body: [
      'Contact form: if you send a message through the form, we receive the name, email address, subject and message you type. The form is processed by Formspree, a third-party service, which passes your message to us.',
      'Email, phone and chat apps: if you contact us by email, phone, WhatsApp, Telegram or Viber, we receive the details you choose to share. Those services have their own privacy policies.',
      'Website analytics: we use Vercel Web Analytics to see how the site is used. It records page views and basic technical information such as the page address, referrer, country, device type and browser. It does not use cookies and is designed to produce aggregated statistics that do not identify individual visitors.',
    ],
  },
  {
    heading: 'Why we use it',
    body: [
      'We use messages to reply to you and to discuss your project. We use analytics to understand which pages are useful and to improve the site. We do not sell personal information.',
    ],
  },
  {
    heading: 'Where the site is hosted',
    body: ['The website is hosted by Vercel. Links on the site to other websites are governed by those sites’ own policies.'],
  },
  {
    heading: 'Your choices',
    body: [
      `You can ask us what information we hold about you, ask us to correct it, or ask us to delete it, by emailing ${BRAND.contact.email}. If you are in the Philippines, the Data Privacy Act of 2012 (Republic Act No. 10173) sets out your rights.`,
    ],
  },
  {
    heading: 'Changes to this page',
    body: [`We will update this page if what we collect changes. Last updated: ${LAST_UPDATED}.`],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy">
        A plain-language summary of what this website collects, why, and how to reach us about it.
      </PageIntro>
      <Section surface="white">
        <div className="max-w-[68ch] space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.heading} aria-labelledby={`p-${section.heading.replace(/\W+/g, '-').toLowerCase()}`}>
              <h2 id={`p-${section.heading.replace(/\W+/g, '-').toLowerCase()}`} className="type-h3">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-slate">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </Section>
    </>
  )
}
