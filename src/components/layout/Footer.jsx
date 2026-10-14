import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import { BRAND } from '../../config/brand'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Works', to: '/work' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: BRAND.socials.facebook,
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    label: 'Instagram',
    href: BRAND.socials.instagram,
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: 'LinkedIn',
    href: BRAND.socials.linkedin,
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: 'Email',
    href: `mailto:${BRAND.contact.email}`,
    icon: <Mail className="w-5 h-5" />,
  },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={BRAND.assets.logo}
                alt={BRAND.name}
                className="h-14 w-14 rounded-xl object-contain shadow-lg shadow-white/5 border border-white/10"
              />
              <div>
                <span className="text-white font-semibold text-lg tracking-tight block">
                  Beacon
                </span>
                <span className="text-zinc-400 text-xs tracking-wider uppercase block">
                  Development Studio
                </span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm mt-4 leading-relaxed max-w-sm">
              {BRAND.tagline}
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">Navigation</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-zinc-500 hover:text-white transition-colors duration-300 text-base font-normal w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Social */}
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300 text-base font-normal w-fit"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">{BRAND.name}</p>
        </div>
      </div>
    </footer>
  )
}