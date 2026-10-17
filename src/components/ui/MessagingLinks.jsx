import { MessageCircle, PhoneCall, Send } from 'lucide-react'
import { BRAND } from '../../config/brand'

// Neutral icons: the apps' own logos are third-party marks, so links are identified by their text labels.
const ICONS = { whatsapp: MessageCircle, telegram: Send, viber: PhoneCall }

/**
 * Chat links for WhatsApp, Telegram and Viber (same number as the phone line).
 * variant 'buttons' is for light surfaces (contact page); 'inline' is a compact row for the navy footer.
 */
export default function MessagingLinks({ variant = 'buttons', className = '' }) {
  const inline = variant === 'inline'
  return (
    <ul className={`flex flex-wrap ${inline ? 'gap-x-4 gap-y-1' : 'gap-2'} ${className}`}>
      {BRAND.contact.messaging.map(({ id, label, href, external }) => {
        const Icon = ICONS[id]
        const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
        return (
          <li key={id}>
            <a
              href={href}
              {...ext}
              className={
                inline
                  ? 'inline-flex min-h-8 items-center gap-1.5 text-white/75 transition-colors hover:text-white motion-reduce:transition-none'
                  : 'inline-flex min-h-11 items-center gap-1.5 rounded-control border border-slate/70 px-3 text-[0.9375rem] font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white motion-reduce:transition-none'
              }
            >
              <Icon size={16} aria-hidden="true" />
              {label}
              <span className="sr-only"> (message {BRAND.name} on {label}{external ? ', opens in a new tab' : ''})</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
