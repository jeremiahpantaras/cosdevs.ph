import { useEffect, useRef, lazy, Suspense } from 'react'
import { motion as Motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import GlowingSphere from '../ui/GlowingSphere'
import { BRAND } from '../../config/brand'

const HeroScene = lazy(() => import('../ui/HeroScene'))

// Inline SVG grain — no external file required
const GRAIN_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`

const STATS = [
  { number: 150, label: 'Projects Completed', suffix: '+' },
  { number: 50, label: 'Satisfied Clients', suffix: '+' },
  { number: 5, label: 'Years Experience', suffix: '+' },
]

function AnimatedStat({ stat, delay }) {
  const ref = useRef()

  useEffect(() => {
    let start = 0
    const end = stat.number
    const duration = 900
    const step = Math.ceil(end / (duration / 16))

    const timer = setTimeout(() => {
      const tick = () => {
        start += step
        if (!ref.current) return
        if (start >= end) {
          ref.current.textContent = end + stat.suffix
        } else {
          ref.current.textContent = start + stat.suffix
          requestAnimationFrame(tick)
        }
      }
      tick()
    }, delay)

    return () => clearTimeout(timer)
  }, [stat, delay])

  return (
    <div
      ref={ref}
      className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-1"
    >
      {stat.number + stat.suffix}
    </div>
  )
}

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Dark overlay to deepen background — must be BEFORE canvas so it renders beneath */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />

      {/* 3D canvas — full bleed background */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* CSS/Framer Motion glowing sphere — no WebGL */}
      <GlowingSphere />

      {/* Readability gradient: left side fades to black */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-black via-black/75 to-transparent pointer-events-none" />

      {/* Subtle right glow (atmosphere echo into page background) */}
      <div className="absolute right-0 bottom-0 w-[55%] h-[70%] bg-linear-to-tl from-blue-950/30 to-transparent blur-xl pointer-events-none z-10" />

      {/* Film grain overlay — mix-blend-screen adds grain brightness to dark pixels */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.07] mix-blend-screen"
        style={{ backgroundImage: GRAIN_BG, backgroundRepeat: 'repeat', backgroundSize: '200px 200px' }}
      />

      {/* Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto lg:ml-0 px-6 sm:px-8 lg:pl-12 lg:pr-16 py-24 sm:py-28 lg:py-32">
        <div className="max-w-2xl space-y-6 sm:space-y-8">

          {/* Badge */}
          <Motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
          >
            {/* Sparkle icon */}
            <svg
              width="13" height="13" viewBox="0 0 24 24" fill="none"
              className="shrink-0"
              aria-hidden="true"
            >
              <path
                d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z"
                fill="url(#sparkleGrad)"
              />
              <path
                d="M19 2 L19.7 4.3 L22 5 L19.7 5.7 L19 8 L18.3 5.7 L16 5 L18.3 4.3 Z"
                fill="url(#sparkleGrad)" opacity="0.8"
              />
              <path
                d="M5 16 L5.5 17.5 L7 18 L5.5 18.5 L5 20 L4.5 18.5 L3 18 L4.5 17.5 Z"
                fill="url(#sparkleGrad)" opacity="0.6"
              />
              <defs>
                <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#e8eef8" />
                  <stop offset="40%"  stopColor="#c8d8f0" />
                  <stop offset="70%"  stopColor="#a0b8e0" />
                  <stop offset="100%" stopColor="#d4e2f8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Shining silver text */}
            <Motion.span
              className="text-xs font-medium tracking-widest uppercase"
              style={{
                background: 'linear-gradient(90deg, #8a9fc0 0%, #c8d8f0 25%, #f0f4ff 50%, #c8d8f0 75%, #8a9fc0 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              {BRAND.badge}
            </Motion.span>
          </Motion.div>

          {/* Headline */}
          <Motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-white leading-[1.08] sm:leading-[1.05]"
          >
            Turning Your Vision,{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-300 to-zinc-500">
              Into
            </span>
            <br />
            Digital Reality.
          </Motion.h1>

          {/* Subheadline */}
          <Motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: 'easeOut' }}
            className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
          >
            Empowering forward-thinking businesses with custom software development, modern web applications, mobile platforms, and intelligent business automation.
          </Motion.p>

          {/* CTA Buttons */}
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.44, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2"
          >
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-3 rounded-xl bg-white text-black font-heading font-semibold text-sm tracking-wide hover:bg-zinc-100 transition-colors duration-200 cursor-pointer text-center"
            >
              Start a Project
            </button>
            <button
              onClick={() => navigate('/work')}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-3 rounded-xl border border-zinc-700 text-zinc-300 font-heading font-semibold text-sm tracking-wide hover:border-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer text-center"
            >
              View Our Work
            </button>
          </Motion.div>

          {/* Stats */}
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.58, ease: 'easeOut' }}
            className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10"
          >
            {STATS.map((stat, i) => (
              <div key={stat.label}>
                <AnimatedStat stat={stat} delay={1100 + i * 120} />
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  )
}