'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 85%',
        },
      })

      gsap.from('.contact-form', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        },
      })

      gsap.from('.contact-info', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="contact-title mb-16 text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Get In Touch
          </h2>
          <h3 className="mt-4 text-4xl font-bold md:text-5xl">
            Let&apos;s Work Together
          </h3>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-neutral-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-white placeholder-neutral-600 outline-none transition-colors focus:border-[#2E5CFF]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-neutral-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-white placeholder-neutral-600 outline-none transition-colors focus:border-[#2E5CFF]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-neutral-400">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-white placeholder-neutral-600 outline-none transition-colors focus:border-[#2E5CFF]"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden rounded-lg bg-[#2E5CFF] px-8 py-4 font-medium text-white transition-all hover:bg-[#2E5CFF]/90 disabled:opacity-50"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
              </span>
            </button>
          </form>

          {/* Contact Info */}
          <div className="contact-info space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-white">Direct Contact</h4>
              <p className="mt-2 text-neutral-400">
                Prefer email? Reach out directly and I&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:tyler.n.vovan@gmail.com"
                className="mt-4 inline-block text-[#2E5CFF] transition-colors hover:text-[#2E5CFF]/80"
              >
                tyler.n.vovan@gmail.com
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">Connect</h4>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://github.com/tylervovan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 text-neutral-400 transition-all hover:border-neutral-700 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/tyler-vovan-30330b2a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 text-neutral-400 transition-all hover:border-neutral-700 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h4 className="text-lg font-semibold text-white">Location</h4>
              <p className="mt-2 text-neutral-400">
                Orange County, California
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Available for remote opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
