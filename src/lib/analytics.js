import { track } from '@vercel/analytics'

/**
 * Conversion events for Vercel Web Analytics (custom events need a Pro or Enterprise plan; on other plans the
 * calls are harmless). Properties never include personal data: only the channel or form name.
 */
export const trackEvent = (name, data) => {
  try {
    track(name, data)
  } catch {
    // Analytics must never break the site.
  }
}

const CHANNELS = [
  [/^mailto:/i, 'email'],
  [/^tel:/i, 'phone'],
  [/wa\.me/i, 'whatsapp'],
  [/t\.me/i, 'telegram'],
  [/^viber:/i, 'viber'],
]

/** Event name for a clicked link when it is a contact channel, otherwise null. */
export const contactChannelFor = (href = '') => CHANNELS.find(([re]) => re.test(href))?.[1] ?? null
