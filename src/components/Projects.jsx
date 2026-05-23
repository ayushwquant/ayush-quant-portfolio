const projects = [
  {
    title: 'QuantBot HQ',
    subtitle: 'Bybit Paper Trading Dashboard',
    description:
      'A real-time algorithmic trading dashboard with regime detection, signal engine, and comprehensive risk management. Built for crypto traders who need precision execution and monitoring.',
    tags: ['React', 'Node.js', 'WebSocket', 'Bybit API'],
    features: ['Regime Detection', 'Signal Engine', 'Risk Management', 'Paper Trading'],
    gradient: 'from-cyan-400 to-blue-500',
    shadowColor: 'shadow-cyan-400/20',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'AMATS',
    subtitle: 'AI Multi-Asset Trading System',
    description:
      'Intelligent multi-asset trading system covering BTC, Gold, and Silver. Leverages EMA confluence signals with ATR-based dynamic risk management for optimal position sizing.',
    tags: ['Python', 'TensorFlow', 'Pine Script', 'REST API'],
    features: ['BTC/Gold/Silver', 'EMA Confluence', 'ATR Risk Mgmt', 'AI Signals'],
    gradient: 'from-emerald-400 to-teal-500',
    shadowColor: 'shadow-emerald-400/20',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Pine Script Strategy Suite',
    subtitle: 'Custom TradingView Indicators',
    description:
      'A comprehensive suite of custom TradingView indicators featuring EMA/ATR/ADX strategies, fully backtested and optimized for multiple timeframes and market conditions.',
    tags: ['Pine Script', 'TradingView', 'Technical Analysis'],
    features: ['EMA/ATR/ADX', 'Multi-Timeframe', 'Backtested', 'Alert System'],
    gradient: 'from-purple-400 to-pink-500',
    shadowColor: 'shadow-purple-400/20',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

function ProjectCard({ project, index }) {
  return (
    <div className={`reveal reveal-delay-${index + 1} group`}>
      <div className="glass-card h-full p-1 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        {/* Gradient top bar */}
        <div className={`h-1 w-full rounded-t-xl bg-gradient-to-r ${project.gradient}`} />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <div className={`mb-3 inline-flex rounded-xl bg-gradient-to-r ${project.gradient} p-3 text-white shadow-lg ${project.shadowColor}`}>
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-cyan-400">
                {project.subtitle}
              </p>
            </div>
            {/* Hover arrow */}
            <div className="rounded-lg border border-white/10 p-2 text-gray-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-cyan-400 group-hover:border-cyan-400/30">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-gray-400">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6 grid grid-cols-2 gap-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-xs text-gray-400"
              >
                <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                {feature}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Algorithmic trading systems, real-time dashboards, and custom
            TradingView indicators built with precision.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
