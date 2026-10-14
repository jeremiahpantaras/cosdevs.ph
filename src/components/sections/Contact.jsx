import { useState } from 'react'
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars
import { BRAND } from '../../config/brand'

const INPUT_CLASS =
  'w-full bg-zinc-900/40 border border-white/5 rounded-xl p-3 text-white text-sm placeholder:text-zinc-500 focus:border-white/20 focus:outline-none transition-colors duration-200'

const CONTACT_INFO = [
  {
    iconEl: <Mail className="w-4 h-4 text-zinc-300" />,
    label: 'Email',
    content: (
      <a
        href={`mailto:${BRAND.contact.email}`}
        className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
      >
        {BRAND.contact.email}
      </a>
    ),
  },
  {
    iconEl: <Phone className="w-4 h-4 text-zinc-300" />,
    label: 'Phone',
    content: (
      <a
        href={`tel:${BRAND.contact.phoneRaw}`}
        className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
      >
        {BRAND.contact.phone}
      </a>
    ),
  },
  {
    iconEl: <MapPin className="w-4 h-4 text-zinc-300" />,
    label: 'Location',
    content: (
      <p className="text-zinc-400 text-sm">
        {BRAND.contact.addressLine1}
        <br />
        {BRAND.contact.addressLine2}
      </p>
    ),
  },
]

// ─── Background data (stable; generated once at module level) ────────────────
const STARS = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  x: +((i * 22.13 + (i % 7) * 14.7) % 100).toFixed(2),
  y: +((i * 17.43 + (i % 5) * 19.3) % 100).toFixed(2),
  size: +(((i * 0.91) % 1.8) + 0.9).toFixed(2),
  opacity: +(((i * 0.17) % 0.5) + 0.45).toFixed(2),
  duration: +(((i * 0.83) % 3) + 2.5).toFixed(1),
  delay: +((i * 0.47) % 5).toFixed(2),
}))

const SHOOTS = [
  { id: 0, x: 8,  y: 10, delay: 0,    duration: 1.3, gap: 12 },
  { id: 1, x: 40, y: 4,  delay: 5.2,  duration: 1.5, gap: 14 },
  { id: 2, x: 64, y: 18, delay: 10.8, duration: 1.2, gap: 11 },
  { id: 3, x: 20, y: 28, delay: 17,   duration: 1.4, gap: 16 },
]

function GalaxyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
      {/* Galaxy core — deep indigo orb */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 700,
          height: 700,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, #4338ca 0%, #312e81 40%, transparent 70%)',
          opacity: 0.22,
        }}
      />

      {/* Secondary haze — blue, top-right */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 480,
          height: 220,
          top: '8%',
          right: '4%',
          background: 'radial-gradient(ellipse, #2563eb 0%, transparent 70%)',
          opacity: 0.14,
        }}
      />


      {/* Stars — subtle twinkle */}
      {STARS.map((s) => (
        <motion.div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: 'white',
            filter: `blur(${s.size * 0.6}px)`,
          }}
          animate={{ opacity: [s.opacity, s.opacity * 0.2, s.opacity] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shooting stars */}
      {SHOOTS.map((s) => (
        <motion.div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: 90,
            height: 1,
            background:
              'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)',
            rotate: 35,
            originX: 0,
            originY: 0.5,
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [0, 260],
            y: [0, 140],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            repeatDelay: s.gap,
            delay: s.delay,
            ease: 'easeIn',
            times: [0, 0.08, 0.75, 1],
          }}
        />
      ))}
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xovpdlzz', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 lg:px-12 overflow-hidden flex items-center"
    >
      {/* Galaxy background */}
      <GalaxyBackground />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* macOS-style window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-zinc-950/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-1 transition-transform duration-300"
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/60 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Window content */}
          <div className="p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-white text-2xl font-medium">Get In Touch</h2>
              <p className="text-zinc-400 mt-2 text-sm">
                Have a project in mind? We&apos;d love to hear about it.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Contact form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'success' && (
                  <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-400/20 rounded-xl text-green-400 text-sm">
                    <CheckCircle size={16} className="shrink-0" />
                    Message sent! We&apos;ll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-400/20 rounded-xl text-red-400 text-sm">
                    <AlertCircle size={16} className="shrink-0" />
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className={INPUT_CLASS}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className={INPUT_CLASS}
                  />
                </div>

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className={INPUT_CLASS}
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Your Message"
                  className={`${INPUT_CLASS} resize-none`}
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 transition-all duration-300 rounded-xl px-6 py-3 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>

                {/* Honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </form>

              {/* Contact info */}
              <div className="space-y-4">
                {CONTACT_INFO.map(({ iconEl, label, content }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-4 bg-white/3 border border-white/[0.07] rounded-xl hover:bg-white/6 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 bg-white/6 border border-white/10 rounded-lg flex items-center justify-center shrink-0">
                      {iconEl}
                    </div>
                    <div>
                      <p className="text-zinc-300 text-xs font-medium mb-1 uppercase tracking-wider">
                        {label}
                      </p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}