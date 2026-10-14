import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

function Card({ children, className = '' }) {
  return (
    <motion.div
      variants={cardVariants}
      className={`relative bg-zinc-950 border border-white/5 rounded-3xl p-8 md:p-10 overflow-hidden
        hover:-translate-y-1 hover:border-white/10 transition-all duration-300 ease-out ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-white/3 to-transparent" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your vision, goals, and challenges to build a focused, tailored roadmap.',
  },
  {
    number: '02',
    title: 'Development & Partnership',
    description: 'We work alongside you through agile sprints — transparent, iterative, and always aligned to your goals.',
  },
  {
    number: '03',
    title: 'Launch & Ongoing Support',
    description: 'A smooth deployment followed by continuous support, monitoring, and improvement.',
  },
]

const whyUs = [
  'Modern, scalable architecture',
  'Transparent, client-focused communication',
  'Agile delivery and rapid iteration',
  'Mobile-first, accessible design',
  'Long-term partnership and ongoing support',
]

export default function About() {
  return (
    <section id="about" className="bg-black py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs">About Beacon Development Studio</p>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mt-3 leading-tight">
            Built with intention.<br />Designed for impact.
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">
            We are a team of developers, designers, and strategists based in Bacolod City, Philippines —
            building software that matters for businesses locally and across the globe.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Who We Are */}
          <Card>
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Who We Are</p>
            <h3 className="text-white text-xl font-medium">A team that cares about what it builds</h3>
            <p className="text-zinc-400 mt-3 leading-relaxed">
              Founded in Bacolod City, Beacon Development Studio is a custom software studio dedicated to helping
              enterprises and emerging businesses grow through technology. We combine technical depth with a genuine understanding
              of what our clients actually need.
            </p>
          </Card>

          {/* Our Approach */}
          <Card>
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Our Approach</p>
            <h3 className="text-white text-xl font-medium">A clear, repeatable process</h3>
            <div className="mt-6 space-y-5">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <span className="text-zinc-600 text-xs font-medium pt-0.5 w-5 shrink-0 select-none">
                    {step.number}
                  </span>
                  <div>
                    <p className="text-white text-sm font-medium">{step.title}</p>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Mission — full width */}
          <Card className="md:col-span-2">
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Mission</p>
            <h3 className="text-white text-xl font-medium">Empowering businesses through custom software</h3>
            <p className="text-zinc-400 mt-3 leading-relaxed max-w-3xl">
              To empower modern businesses by delivering tailored, high-quality custom software solutions.
              We partner with our clients to simplify complex operational challenges, providing continuous development,
              business automation, and proactive support to ensure their digital success and sustainable growth.
            </p>
          </Card>

          {/* Vision */}
          <Card>
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Vision</p>
            <h3 className="text-white text-xl font-medium">Leading digital transformation by 2030</h3>
            <p className="text-zinc-400 mt-3 leading-relaxed">
              To be the trusted, long-term digital transformation partner for enterprises and growing companies —
              recognized for impact, technical reliability, and unwavering commitment to client success.
            </p>
          </Card>

          {/* Why Choose Us */}
          <Card>
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Why Choose Us</p>
            <h3 className="text-white text-xl font-medium">The right partner for your growth</h3>
            <ul className="mt-5 space-y-3">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                  <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

        </motion.div>
      </div>
    </section>
  )
}