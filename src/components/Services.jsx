export default function Services() {
  const services = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Pine Script Indicators',
      price: '₹800 – ₹4,000',
      description: 'Custom TradingView indicators with buy/sell signals, alerts, and clean visual design.',
      features: [
        'Custom entry & exit logic',
        'Alert conditions for notifications',
        'ATR / EMA / RSI based strategies',
        'Clean, commented Pine Script v5 code',
        'Visual signals & dashboard panels',
      ],
      accent: 'cyan',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'React Trading Dashboards',
      price: '₹3,000 – ₹15,000',
      description: 'Full-stack trading dashboards with real-time data, charts, and portfolio management.',
      features: [
        'Real-time market data integration',
        'Interactive charting with TradingView widgets',
        'Portfolio tracking & P&L analysis',
        'Signal engine & regime detection',
        'Responsive, dark-themed UI',
      ],
      accent: 'emerald',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Strategy Backtesting & Optimization',
      price: '₹1,500 – ₹5,000',
      description: 'Backtest your trading strategies with detailed performance reports and parameter optimization.',
      features: [
        'Historical backtesting across timeframes',
        'Win rate, drawdown & Sharpe ratio reports',
        'Parameter optimization & sensitivity analysis',
        'Multi-asset testing (Crypto, Forex, Stocks)',
        'Detailed PDF performance report',
      ],
      accent: 'purple',
    },
  ]

  const accentClasses = {
    cyan: {
      border: 'border-cyan-400/20 hover:border-cyan-400/50',
      bg: 'bg-cyan-400/5',
      text: 'text-cyan-400',
      shadow: 'hover:shadow-cyan-400/10',
      dot: 'bg-cyan-400',
      badge: 'bg-cyan-400/10 text-cyan-400',
    },
    emerald: {
      border: 'border-emerald-400/20 hover:border-emerald-400/50',
      bg: 'bg-emerald-400/5',
      text: 'text-emerald-400',
      shadow: 'hover:shadow-emerald-400/10',
      dot: 'bg-emerald-400',
      badge: 'bg-emerald-400/10 text-emerald-400',
    },
    purple: {
      border: 'border-purple-400/20 hover:border-purple-400/50',
      bg: 'bg-purple-400/5',
      text: 'text-purple-400',
      shadow: 'hover:shadow-purple-400/10',
      dot: 'bg-purple-400',
      badge: 'bg-purple-400/10 text-purple-400',
    },
  }

  return (
    <section id="services" className="relative px-6 py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-sm font-medium text-emerald-400">
            Services
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            What I{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            From custom indicators to full trading dashboards — I deliver
            professional-grade tools tailored to your trading strategy.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const colors = accentClasses[service.accent]
            return (
              <div
                key={service.title}
                className={`reveal group rounded-2xl border ${colors.border} ${colors.bg} p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl ${colors.shadow} hover:-translate-y-2`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex rounded-xl ${colors.badge} p-3`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Price */}
                <div className={`mb-4 text-2xl font-black ${colors.text}`}>
                  {service.price}
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${colors.dot}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`mt-8 w-full rounded-xl border ${colors.border} bg-transparent px-6 py-3 text-sm font-semibold ${colors.text} transition-all duration-300 hover:${colors.bg}`}
                  onClick={() =>
                    document
                      .querySelector('#contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Get Started →
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
