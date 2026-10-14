import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { name: 'Home', id: 'home', path: '/' },
  { name: 'Services', id: 'services', path: '/services' },
  { name: 'About', id: 'about', path: '/about' },
  { name: 'Work', id: 'work', path: '/work' },
  { name: 'Contact', id: 'contact', path: '/contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (link) => {
    if (link.id === 'home') {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      setActiveSection('home')
      return
    }

    if (link.path.startsWith('/') && !link.path.includes('#')) {
      navigate(link.path)
      setActiveSection(link.id)
      return
    }

    if (location.pathname !== '/' && link.path.includes('#')) {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(link.id)
        if (element) {
          window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' })
        }
      }, 100)
      return
    }

    const element = document.getElementById(link.id)
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 150
        for (const link of NAV_LINKS) {
          const element = document.getElementById(link.id)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(link.id)
              break
            }
          }
        }
      }
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      const currentLink = NAV_LINKS.find(link => link.path === location.pathname)
      if (currentLink) setActiveSection(currentLink.id)
    }
  }, [location.pathname])

  return (
    <nav className="fixed top-16 right-16 z-50 max-sm:top-12 max-sm:right-4">
      <ul className="flex flex-col items-end gap-2 text-right max-sm:gap-0">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.id

          return (
            <li key={link.id} className="relative group">
              <button
                onClick={() => scrollToSection(link)}
                className={`
                  relative italic tracking-wide font-medium
                  text-sm md:text-base max-sm:text-xs
                  bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500
                  bg-clip-text text-transparent
                  transition-all duration-300 ease-out
                  hover:translate-x-1
                  cursor-pointer focus:outline-none
                  ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}
                `}
              >
                {link.name}
              </button>
              {isActive && (
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-5 h-[1px] bg-gradient-to-r from-zinc-400 to-transparent pointer-events-none" />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}