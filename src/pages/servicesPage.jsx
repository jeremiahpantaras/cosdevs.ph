import { motion } from 'framer-motion'
import { Code, Smartphone, Workflow, Brush, Cloud, Layers, ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const MotionDiv = motion.div

const STARS = [
  { top: '4%',  left: '10%', size: 1.5 },
  { top: '10%', left: '55%', size: 1 },
  { top: '16%', left: '28%', size: 1 },
  { top: '22%', left: '80%', size: 2 },
  { top: '30%', left: '6%',  size: 1 },
  { top: '36%', left: '92%', size: 1.5 },
  { top: '44%', left: '44%', size: 1 },
  { top: '50%', left: '70%', size: 1 },
  { top: '57%', left: '3%',  size: 1.5 },
  { top: '63%', left: '36%', size: 1 },
  { top: '70%', left: '86%', size: 2 },
  { top: '76%', left: '20%', size: 1 },
  { top: '83%', left: '58%', size: 1.5 },
  { top: '90%', left: '75%', size: 1 },
  { top: '8%',  left: '42%', size: 1 },
  { top: '46%', left: '16%', size: 1 },
  { top: '19%', left: '50%', size: 1.5 },
  { top: '66%', left: '60%', size: 1 },
  { top: '87%', left: '40%', size: 1 },
  { top: '14%', left: '72%', size: 1 },
]

function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
        />
      ))}
    </div>
  )
}

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom, scalable, and high-performance software systems built to empower complex operations.',
    size: 'large',
    accent: true,
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Intuitive, native, and cross-platform apps for iOS and Android.',
    size: 'medium',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description: 'Process automation, systems integration, and AI-enabled workflows to optimize business efficiency.',
    size: 'medium',
  },
  {
    icon: Layers,
    title: 'Web Development',
    description: 'Modern, responsive, and robust web applications designed to convert visitors and scale effortlessly.',
    size: 'wide',
  },
  {
    icon: Brush,
    title: 'UI/UX & Product Design',
    description: 'World-class, user-centered interface design for web, mobile, and digital products.',
    size: 'medium',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Infrastructure setup, continuous deployment pipelines, and scalable cloud management.',
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
  visible: { transition: { staggerChildren: 0.1 } },
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
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {service.accent && (
        <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      )}
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 p-2.5">
            <Icon size={isLarge ? 22 : 18} className="text-zinc-400" />
          </div>
          <h3 className={`font-semibold text-white leading-tight ${
            isLarge ? 'text-2xl md:text-3xl mt-2' : 'text-base mt-1'
          }`}>
            {service.title}
          </h3>
          <p className={`text-zinc-400 mt-2 leading-relaxed ${
            isLarge ? 'text-sm md:text-base max-w-sm' : 'text-sm'
          }`}>
            {service.description}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-1 text-zinc-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn more</span>
          <ArrowUpRight size={13} />
        </div>
      </div>
    </MotionDiv>
  )
}

export default function ServicesPage() {
  return (
    <section className="relative bg-black min-h-screen py-20 pt-36 px-6 lg:px-12 overflow-hidden">
      <StarField />

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Header */}
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
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mt-2">
            Our Services
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
            Discover how we help businesses grow with technology, design, and expertise.
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

        {/* CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 border border-zinc-800 rounded-2xl bg-zinc-900/40 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Ready to elevate your business?
            </h2>
            <p className="text-zinc-400 mt-2 text-sm md:text-base max-w-lg">
              Contact us for a free consultation and build something amazing together.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-100 transition-colors duration-200 shrink-0"
          >
            Get Started
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </MotionDiv>
      </div>
    </section>
  )
}

