import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MoltenMetal from '../components/ui/MoltenMetal';
import project1 from '../assets/images/project1.webp';
import project2 from '../assets/images/project2.webp';
import project3 from '../assets/images/project3.webp';
import satoruLogo from '../assets/images/satorulogo.webp';
import avendroLogo from '../assets/images/avendrologo.webp';
import posLogo from '../assets/images/poslogo.webp';
import sentinelsLogo from '../assets/images/sentinelslogo.webp';
import tabangLogo from '../assets/images/tabanglogo.webp';
import recivoImg from '../assets/images/Recivo.png';
import smsGatewayImg from '../assets/images/SMS Gateway.png';
import ePunoImg from '../assets/images/ePuno.png';
import incognitoImg from '../assets/images/incognito.png';

const projects = [
  {
    title: 'Recivo',
    description: 'A modern receipt generation platform designed specifically for online sellers and business owners. Create, manage, and share professional receipts in seconds—without the hassle of manual paperwork.',
    tags: ['Receipt Generation', 'E-Commerce Tool', 'Business Automation'],
    logo: recivoImg,
    scrollImage: recivoImg,
    isScreenshot: true,
    link: 'https://recivo.cosedevs.com/',
  },
  {
    title: 'SMS Gateway',
    description: 'An Android mobile application (.APK) that transforms your smartphone into an automated SMS gateway. Harness existing SIM promos and cellular allowances to power cost-effective business SMS communications.',
    tags: ['Mobile Application', 'SMS Automation', 'Business Communication'],
    logo: smsGatewayImg,
    scrollImage: smsGatewayImg,
    isScreenshot: true,
    link: '#',
  },
  {
    title: 'ePuno',
    description: 'More than just a personal budget tracker — ePuno is the first entry in a conceptual, collaborative Global Directory of open-source financial empowerment tools, shaping personal finance navigation.',
    tags: ['FinTech', 'Budget Tracking', 'Financial Empowerment'],
    logo: ePunoImg,
    scrollImage: ePunoImg,
    isScreenshot: true,
    link: 'https://epuno.cosedevs.com/',
  },
  {
    title: 'Incognito',
    description: 'A modern web application allowing users to send and receive anonymous messages through unique, shareable links. Designed for constructive feedback, honest suggestions, and safe civic participation without fear or bias.',
    tags: ['Anonymous Messaging', 'Feedback Platform', 'Civic Engagement'],
    logo: incognitoImg,
    scrollImage: incognitoImg,
    isScreenshot: true,
    link: 'https://incognito.cosedevs.com/',
  },
  {
    title: 'Satoru',
    description: 'A web application designed to intelligently summarize and extract key information from uploaded documents, providing users with quick, distilled insights.',
    tags: ['Document Intelligence', 'Smart Summarization', 'Knowledge Management'],
    logo: satoruLogo,
    scrollImage: project1,
    link: 'https://satoru-chi.vercel.app/',
  },
  {
    title: 'Avendro',
    description: 'A comprehensive lending management system designed to streamline loan operations and financial management for lending institutions.',
    tags: ['Lending Management', 'Loan Operations', 'Financial Systems'],
    logo: avendroLogo,
    scrollImage: project2,
    link: 'https://avendrobcd.onrender.com/',
  },
  {
    title: 'Point of Sale System',
    description: 'A point of sale (POS) system for retail businesses, featuring inventory management, sales tracking, and customer management functionalities.',
    tags: ['Retail POS', 'Inventory Management', 'Sales Tracking'],
    logo: posLogo,
    scrollImage: project3,
    link: 'https://example.com/pos',
  },
  {
    title: 'Sentinels - Gamified Cybersecurity',
    description: 'An engaging mobile game with multiplayer functionality, leaderboards, and in-app purchases focused on cybersecurity education.',
    tags: ['Cybersecurity Education', 'Gamified Learning', 'Mobile Game'],
    logo: sentinelsLogo,
    scrollImage: sentinelsLogo,
    link: 'https://drive.google.com/file/d/1dB0u3wjIOWzKIGJtJPzDSgzceLOgFC2-/view',
  },
  {
    title: 'Student Management System',
    description: 'A comprehensive dashboard for educational institutions with data visualization, analytics, and reporting tools for student management.',
    tags: ['Academic Analytics', 'Institutional Dashboard', 'Student Management'],
    logo: sentinelsLogo,
    scrollImage: satoruLogo,
    link: 'https://sentinelsadmin.onrender.com/',
  },
  {
    title: 'Tabang Negros',
    description: 'A modern, real-time emergency help request system designed for Negros Island, Philippines. This full-stack web application allows users to quickly send emergency requests with their exact location to responders.',
    tags: ['Emergency Response', 'Real-Time Dispatch', 'Public Safety'],
    logo: tabangLogo,
    scrollImage: tabangLogo,
    link: 'https://tabangnegros-installation.vercel.app/',
  },
];

const row1 = projects.slice(0, Math.ceil(projects.length / 2));
const row2 = projects.slice(Math.ceil(projects.length / 2));
const loopRow1 = [...row1, ...row1, ...row1];
const loopRow2 = [...row2, ...row2, ...row2];

function ScrollCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative shrink-0 w-[280px] h-[168px] md:w-[400px] md:h-60 rounded-2xl overflow-hidden border border-white/5 block opacity-50 hover:opacity-90 transition-opacity duration-500"
    >
      <img
        src={project.scrollImage}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4 md:p-5">
        <div className="flex items-center justify-between w-full">
          <span className="text-white text-sm md:text-base font-medium tracking-tight">
            {project.title}
          </span>
          <FiExternalLink className="text-zinc-400 text-sm shrink-0 ml-2" />
        </div>
      </div>
    </a>
  );
}

export default function WorkPage() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* ── Molten Metal WebGL Background ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <MoltenMetal
          color1="#4338ca"
          color2="#0891b2"
          color3="#c084fc"
          backgroundColor="#000000"
          speed={0.25}
          scale={3.2}
          detail={3}
          glow={1.5}
          coreSize={0.12}
          swirl={1.1}
          fold={-0.22}
          blackPoint={0.035}
          brightness={1.15}
          colorMode="molten"
          grain={true}
          grainIntensity={0.035}
          mouseInteraction={true}
          mouseStrength={0.35}
          opacity={0.55}
          className="w-full h-full"
        />
        {/* Dark-theme atmospheric vignette to preserve deep black tones & razor-sharp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_75%)] pointer-events-none" />
      </div>

      {/* ── Scrolling Showcase ── */}
      <section className="relative overflow-hidden pt-32 pb-20 z-10">
        {/* Soft edge fade for infinite scroll carousel */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black_0%,transparent_15%,transparent_85%,black_100%)]" />
        </div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 px-6 relative z-20"
        >
          <p className="text-zinc-500 uppercase text-sm tracking-widest">Our Work</p>
          <h1 className="text-white/80 text-5xl md:text-7xl font-bold tracking-tight mt-4">
            Architecting the Future,<br />One Line at a Time.
          </h1>
          <p className="text-zinc-400 mt-5 text-base md:text-lg leading-relaxed">
            A selection of products we've designed, built, and shipped.
          </p>
        </motion.div>

        {/* Scroll Rows */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Row 1 — left to right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            >
              {loopRow1.map((project, i) => (
                <ScrollCard key={i} project={project} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 — right to left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6 w-max"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            >
              {loopRow2.map((project, i) => (
                <ScrollCard key={i} project={project} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Detailed Project Grid ── */}
      <section className="pb-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 uppercase text-xs tracking-widest text-center mb-16"
          >
            All Projects
          </motion.p>
        </div>

        {/* Full-width project list with edge-to-edge gray top & bottom lines on every project */}
        <div className="w-full flex flex-col border-t border-b border-zinc-800 divide-y divide-zinc-800">
          {projects.map((project, index) => (
            <div key={index} className="w-full py-10 md:py-16">
              <div className="max-w-5xl mx-auto px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="group relative flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden transition-all duration-500"
                >
                  {/* Fading container background — dissolves softly horizontally so no rounded square is visible */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.035] via-white/[0.01] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Thumbnail on the left with edge fade */}
                  <div className="w-full md:w-[400px] lg:w-[440px] h-60 md:h-auto min-h-[220px] md:min-h-[280px] relative overflow-hidden flex items-center justify-center shrink-0">
                    {/* Soft fading overlays so the image dissolves seamlessly into the container */}
                    <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-black/40 z-10 pointer-events-none" />
                    <div className="md:hidden block absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-transparent to-black/40 z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-black/10 z-1 pointer-events-none" />

                    {project.isScreenshot ? (
                      <img
                        src={project.scrollImage || project.logo}
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    ) : (
                      <div className={`${project.needsWhiteBg ? 'bg-white p-6 rounded-2xl' : ''} relative z-10 flex items-center justify-center`}>
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="w-28 h-28 md:w-36 md:h-36 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    )}
                  </div>

                  {/* Description and details on the right */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1 relative z-10">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-zinc-200 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-zinc-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs text-zinc-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    <div className="pt-4 border-t border-white/5 flex items-center">
                      {project.link && project.link !== '#' ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300 group/btn"
                        >
                          <span>Visit Website</span>
                          <FiExternalLink className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm text-zinc-400 cursor-default">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span>Mobile Application (.APK)</span>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 text-center"
          >
            <h2 className="text-white text-2xl md:text-3xl font-medium tracking-tight mb-3">
              Ready to build something amazing?
            </h2>
            <p className="text-zinc-500 mb-8 text-sm md:text-base">
              We're passionate about turning ideas into reality. Let's collaborate on your next project.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}