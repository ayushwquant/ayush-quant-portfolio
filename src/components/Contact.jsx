import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ayushwquant',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'Fiverr',
      href: 'https://www.fiverr.com/ayush_quant',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092V16h-1.722v-3.727h-.851c-.546 0-.84.41-.84 1.092V16h-1.72v-6.063h1.72v.368a1.71 1.71 0 0 1 1.39-.63c.689 0 1.202.334 1.449.896a1.87 1.87 0 0 1 1.591-.896c1.058 0 1.672.717 1.672 1.883V16h-1.72v-3.117c0-.682-.294-1.092-.84-1.092h-.439zM7.39 13.727c0-.109.003-.215.011-.32h4.37c.122-2.038-1.269-3.682-3.333-3.682-2.052 0-3.527 1.545-3.527 3.59 0 2.046 1.475 3.59 3.527 3.59 1.296 0 2.432-.612 3.06-1.596l-1.384-.955c-.344.515-.965.84-1.676.84-1.048 0-1.795-.618-2.048-1.467zm.011-.691c.253-.849 1-1.467 2.048-1.467 1.048 0 1.795.618 2.048 1.467H7.401zM1.937 16H3.66v-4.97h1.724V9.937H3.66V9.38c0-.546.41-.84 1.092-.84h.632V6.9H4.35c-1.466 0-2.413.753-2.413 2.267v.77H.94v1.093h.997V16z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/ayush-quant',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-sm font-medium text-cyan-400">
            Contact
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Let's{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Have a project in mind? Drop me a message and I'll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <div className="reveal lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-700/50 bg-slate-800/50 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-700/50 bg-slate-800/50 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border border-gray-700/50 bg-slate-800/50 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/20"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="glow-btn w-full text-base sm:w-auto"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>

          {/* Social links & info */}
          <div className="reveal lg:col-span-2">
            <div className="rounded-2xl border border-gray-700/30 bg-slate-800/30 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-bold text-white">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-gray-700/30 bg-slate-800/50 px-5 py-4 text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
                  >
                    {link.icon}
                    <span className="font-medium">{link.name}</span>
                    <svg
                      className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
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
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-sm font-medium">
                    Available for new projects
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  Typically respond within 2-4 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
