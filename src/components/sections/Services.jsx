import { motion } from 'framer-motion'
import { Layers, Brush, Code, Smartphone, Server, Workflow, ArrowUpRight } from 'lucide-react'

const MotionDiv = motion.div

const STARS = [
  // hero — very large bright stars
  { top: '6%',  left: '8%',  size: 4.5, anim: 'twinkle-bright', delay: 0,   dur: 3.2 },
  { top: '25%', left: '82%', size: 5,   anim: 'twinkle-bright', delay: 1.1, dur: 2.8 },
  { top: '72%', left: '88%', size: 4.5, anim: 'twinkle-bright', delay: 0.4, dur: 3.6 },
  { top: '48%', left: '44%', size: 4,   anim: 'twinkle-bright', delay: 2.0, dur: 2.5 },
  { top: '85%', left: '15%', size: 4.5, anim: 'twinkle-bright', delay: 0.7, dur: 3.0 },
  { top: '14%', left: '58%', size: 4,   anim: 'twinkle-bright', delay: 1.6, dur: 4.0 },
  { top: '61%', left: '32%', size: 5,   anim: 'twinkle-bright', delay: 0.2, dur: 2.6 },
  { top: '38%', left: '70%', size: 4,   anim: 'twinkle-bright', delay: 2.5, dur: 3.4 },
  { top: '91%', left: '55%', size: 4.5, anim: 'twinkle-bright', delay: 0.9, dur: 3.1 },
  { top: '3%',  left: '45%', size: 4,   anim: 'twinkle-bright', delay: 1.8, dur: 2.9 },
  { top: '54%', left: '20%', size: 5,   anim: 'twinkle-bright', delay: 3.1, dur: 3.8 },
  { top: '18%', left: '97%', size: 4,   anim: 'twinkle-bright', delay: 0.5, dur: 4.2 },
  // mid
  { top: '12%', left: '22%', size: 3,   anim: 'twinkle-mid',    delay: 0.5, dur: 4.2 },
  { top: '18%', left: '91%', size: 2.5, anim: 'twinkle-mid',    delay: 1.3, dur: 5.0 },
  { top: '32%', left: '5%',  size: 3,   anim: 'twinkle-mid',    delay: 0.9, dur: 3.8 },
  { top: '44%', left: '61%', size: 2.5, anim: 'twinkle-mid',    delay: 2.2, dur: 4.5 },
  { top: '55%', left: '77%', size: 3,   anim: 'twinkle-mid',    delay: 0.1, dur: 3.3 },
  { top: '68%', left: '50%', size: 2.5, anim: 'twinkle-mid',    delay: 1.8, dur: 4.8 },
  { top: '78%', left: '35%', size: 3,   anim: 'twinkle-mid',    delay: 3.0, dur: 3.7 },
  { top: '90%', left: '68%', size: 2.5, anim: 'twinkle-mid',    delay: 0.6, dur: 4.1 },
  { top: '5%',  left: '75%', size: 3,   anim: 'twinkle-mid',    delay: 1.4, dur: 5.2 },
  { top: '36%', left: '42%', size: 2.5, anim: 'twinkle-mid',    delay: 2.8, dur: 3.9 },
  { top: '22%', left: '12%', size: 3,   anim: 'twinkle-mid',    delay: 0.3, dur: 4.4 },
  { top: '95%', left: '25%', size: 2.5, anim: 'twinkle-mid',    delay: 1.7, dur: 3.1 },
  { top: '10%', left: '38%', size: 3,   anim: 'twinkle-mid',    delay: 2.6, dur: 4.6 },
  { top: '47%', left: '85%', size: 2.5, anim: 'twinkle-mid',    delay: 0.4, dur: 5.4 },
  { top: '74%', left: '14%', size: 3,   anim: 'twinkle-mid',    delay: 3.4, dur: 4.0 },
  { top: '29%', left: '72%', size: 2.5, anim: 'twinkle-mid',    delay: 1.0, dur: 3.5 },
  { top: '83%', left: '48%', size: 3,   anim: 'twinkle-mid',    delay: 2.0, dur: 4.9 },
  { top: '16%', left: '3%',  size: 2.5, anim: 'twinkle-mid',    delay: 0.2, dur: 5.6 },
  // dim
  { top: '8%',  left: '48%', size: 2,   anim: 'twinkle-dim',    delay: 0.8, dur: 6.0 },
  { top: '15%', left: '35%', size: 2,   anim: 'twinkle-dim',    delay: 2.4, dur: 5.5 },
  { top: '20%', left: '67%', size: 1.5, anim: 'twinkle-dim',    delay: 1.0, dur: 6.5 },
  { top: '28%', left: '55%', size: 2,   anim: 'twinkle-dim',    delay: 3.2, dur: 4.9 },
  { top: '33%', left: '88%', size: 1.5, anim: 'twinkle-dim',    delay: 0.0, dur: 7.0 },
  { top: '40%', left: '18%', size: 2,   anim: 'twinkle-dim',    delay: 1.9, dur: 5.8 },
  { top: '50%', left: '93%', size: 1.5, anim: 'twinkle-dim',    delay: 2.7, dur: 6.2 },
  { top: '58%', left: '28%', size: 2,   anim: 'twinkle-dim',    delay: 0.4, dur: 5.3 },
  { top: '63%', left: '8%',  size: 1.5, anim: 'twinkle-dim',    delay: 3.5, dur: 6.8 },
  { top: '70%', left: '62%', size: 2,   anim: 'twinkle-dim',    delay: 1.2, dur: 5.1 },
  { top: '75%', left: '42%', size: 1.5, anim: 'twinkle-dim',    delay: 2.1, dur: 6.3 },
  { top: '80%', left: '78%', size: 2,   anim: 'twinkle-dim',    delay: 0.6, dur: 5.7 },
  { top: '88%', left: '52%', size: 1.5, anim: 'twinkle-dim',    delay: 3.8, dur: 4.7 },
  { top: '92%', left: '12%', size: 2,   anim: 'twinkle-dim',    delay: 1.5, dur: 6.6 },
  { top: '97%', left: '85%', size: 1.5, anim: 'twinkle-dim',    delay: 0.2, dur: 5.4 },
  { top: '3%',  left: '32%', size: 2,   anim: 'twinkle-dim',    delay: 2.9, dur: 7.2 },
  { top: '10%', left: '82%', size: 1.5, anim: 'twinkle-dim',    delay: 1.1, dur: 5.9 },
  { top: '42%', left: '38%', size: 2,   anim: 'twinkle-dim',    delay: 3.3, dur: 6.1 },
  { top: '52%', left: '15%', size: 1.5, anim: 'twinkle-dim',    delay: 0.7, dur: 5.6 },
  { top: '65%', left: '96%', size: 2,   anim: 'twinkle-dim',    delay: 2.0, dur: 6.4 },
  { top: '23%', left: '47%', size: 1.5, anim: 'twinkle-dim',    delay: 3.6, dur: 5.2 },
  { top: '37%', left: '28%', size: 2,   anim: 'twinkle-dim',    delay: 0.9, dur: 6.7 },
  { top: '46%', left: '58%', size: 1.5, anim: 'twinkle-dim',    delay: 2.3, dur: 4.8 },
  { top: '57%', left: '40%', size: 2,   anim: 'twinkle-dim',    delay: 1.4, dur: 7.0 },
  { top: '69%', left: '72%', size: 1.5, anim: 'twinkle-dim',    delay: 3.0, dur: 5.5 },
  { top: '76%', left: '22%', size: 2,   anim: 'twinkle-dim',    delay: 0.3, dur: 6.2 },
  { top: '84%', left: '62%', size: 1.5, anim: 'twinkle-dim',    delay: 2.8, dur: 5.0 },
  { top: '93%', left: '38%', size: 2,   anim: 'twinkle-dim',    delay: 1.6, dur: 6.9 },
  { top: '11%', left: '65%', size: 1.5, anim: 'twinkle-dim',    delay: 3.1, dur: 5.8 },
  { top: '30%', left: '18%', size: 2,   anim: 'twinkle-dim',    delay: 0.5, dur: 6.3 },
]

const GALAXY_STYLE = `
  @keyframes twinkle-bright {
    0%, 100% { opacity: 0.85; transform: scale(1); }
    50%       { opacity: 0.18; transform: scale(0.65); }
  }
  @keyframes twinkle-mid {
    0%, 100% { opacity: 0.50; }
    50%       { opacity: 0.08; }
  }
  @keyframes twinkle-dim {
    0%, 100% { opacity: 0.25; }
    50%       { opacity: 0.04; }
  }
`

function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{GALAXY_STYLE}</style>

      {/* Nebula wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 18% 28%, rgba(99,102,241,0.045) 0%, transparent 55%), ' +
            'radial-gradient(ellipse at 78% 72%, rgba(139,92,246,0.035) 0%, transparent 55%)',
        }}
      />

      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animation: `${s.anim} ${s.dur}s ${s.delay}s ease-in-out infinite`,
            boxShadow:
              s.anim === 'twinkle-bright'
                ? `0 0 ${s.size * 4}px ${s.size * 1.5}px rgba(255,255,255,0.22)`
                : s.anim === 'twinkle-mid'
                ? `0 0 ${s.size * 2}px ${s.size}px rgba(255,255,255,0.08)`
                : 'none',
          }}
        />
      ))}
    </div>
  )
}

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description:
      'Bespoke software solutions engineered to your exact specifications — built for performance, scalability, and long-term enterprise growth.',
    size: 'large',
    accent: true,
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android built for seamless engagement.',
    size: 'medium',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description: 'Streamline workflows, connect systems, and eliminate manual bottlenecks with custom automation.',
    size: 'medium',
  },
  {
    icon: Layers,
    title: 'Web Development',
    description:
      'Modern, responsive web applications built with cutting-edge frameworks to elevate your digital presence.',
    size: 'wide',
  },
  {
    icon: Brush,
    title: 'UI/UX Design',
    description: 'Intentional, user-centered interfaces and digital product designs that convert.',
    size: 'medium',
  },
  {
    icon: Server,
    title: 'Maintenance & Support',
    description: 'Continuous updates, cloud optimization, and monitoring to keep systems secure and resilient.',
    size: 'medium',
  },
]

const sizeClasses = {
  large: 'col-span-1 md:col-span-2 row-span-2',
  medium: 'col-span-1 row-span-1',
  wide: 'col-span-1 md:col-span-2 row-span-1',
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function ServiceCard({ service }) {
  const Icon = service.icon
  const isLarge = service.size === 'large'

  return (
    <MotionDiv
      variants={cardVariants}
      className={`${sizeClasses[service.size]} group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 cursor-pointer hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Subtle glow layer */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Accent orb for featured card */}
      {service.accent && (
        <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      )}

      <div className="relative flex h-full flex-col justify-between">
        <div>
          {/* Icon */}
          <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 p-2.5">
            <Icon size={isLarge ? 22 : 18} className="text-zinc-400" />
          </div>

          {/* Title */}
          <h3
            className={`font-semibold text-white leading-tight ${
              isLarge ? 'text-2xl md:text-3xl mt-2' : 'text-base mt-1'
            }`}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className={`text-zinc-400 mt-2 leading-relaxed ${
              isLarge ? 'text-sm md:text-base max-w-sm' : 'text-sm'
            }`}
          >
            {service.description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="mt-6 flex items-center gap-1 text-zinc-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn more</span>
          <ArrowUpRight size={13} />
        </div>
      </div>
    </MotionDiv>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24 px-6 lg:px-12 overflow-hidden">
      <StarField />

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-zinc-700" />
            <p className="text-zinc-500 uppercase tracking-widest text-sm">What we do</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mt-2">
            Services we offer
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
            From concept to deployment — we build, design, and scale digital products that move businesses forward.
          </p>
        </MotionDiv>

        {/* Decorative line */}
        <div
          className="mt-12 h-px"
          style={{ background: 'linear-gradient(to right, rgba(63,63,70,0.9), rgba(63,63,70,0.3), transparent)' }}
        />

        {/* Bento Grid */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 auto-rows-[180px]"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}