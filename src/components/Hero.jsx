import { useEffect, useState } from 'react'

function FloatingParticle({ style }) {
  return (
    <div
      className="absolute rounded-full opacity-20"
      style={style}
    />
  )
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid */}
      <div className="bg-grid-pattern absolute inset-0 opacity-40" />

      {/* Radial gradient overlays */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-cyan-400/5 via-transparent to-transparent" />
      <div className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-gradient-radial from-emerald-400/5 via-transparent to-transparent" />
      <div className="absolute -left-40 bottom-20 h-[600px] w-[600px] rounded-full bg-gradient-radial from-cyan-400/5 via-transparent to-transparent" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <FloatingParticle
          key={i}
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#00e5ff' : '#00e676',
            animation: `particleFloat ${15 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite`,
            boxShadow: `0 0 ${10 + Math.random() * 20}px ${i % 2 === 0 ? 'rgba(0,229,255,0.5)' : 'rgba(0,230,118,0.5)'}`,
          }}
        />
      ))}

      {/* Decorative lines */}
      <div className="absolute left-[10%] top-[20%] h-32 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-float" />
      <div className="absolute right-[15%] top-[30%] h-24 w-px bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent animate-float-delayed" />
      <div className="absolute left-[70%] top-[60%] h-40 w-px bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-float-slow" />
    </div>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <GridBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-400 backdrop-blur-sm transition-all duration-700 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          Available for freelance work
        </div>

        {/* Name */}
        <h1
          className={`mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl transition-all duration-700 delay-100 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text text-shadow-glow">Ayush</span>
        </h1>

        {/* Tagline */}
        <p
          className={`mb-6 text-xl font-semibold text-gray-300 md:text-2xl lg:text-3xl transition-all duration-700 delay-200 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          Trading Tools Developer{' '}
          <span className="text-cyan-400">|</span> Pine Script &amp; React
          Dashboards
        </p>

        {/* Subtext */}
        <p
          className={`mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg transition-all duration-700 delay-300 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          I build custom TradingView indicators, algorithmic trading dashboards,
          and fintech web apps.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-[400ms] ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="glow-btn group flex items-center gap-2 text-base"
          >
            <span>View My Work</span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
          <a
            href="https://www.fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn flex items-center gap-2 text-base"
          >
            <span>Hire Me on Fiverr</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 flex items-center justify-center gap-8 md:gap-16 transition-all duration-700 delay-500 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {[
            { value: '50+', label: 'Projects Built' },
            { value: '3+', label: 'Years Experience' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-gray-500 md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-600 p-1">
          <div className="h-2 w-1 rounded-full bg-cyan-400 animate-pulse-glow" />
        </div>
      </div>
    </section>
  )
}
