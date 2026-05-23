import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/5 bg-navy-900/80 py-3 shadow-2xl shadow-black/50 backdrop-blur-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 font-bold text-navy-900 shadow-lg shadow-cyan-400/20 transition-transform duration-300 group-hover:scale-110">
            A
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Ayush<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-cyan-400"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://www.fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-2 text-sm font-semibold text-navy-900 shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              mobileOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              mobileOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-semibold text-white transition-colors duration-300 hover:text-cyan-400"
              style={{ transitionDelay: mobileOpen ? `${i * 100}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn mt-4 text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Hire Me on Fiverr
          </a>
        </div>
      </div>
    </nav>
  )
}
