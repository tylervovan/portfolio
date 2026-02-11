'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title letters
      gsap.from('.hero-title-letter', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.05,
        delay: 0.2,
      })

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      })

      // Animate links
      gsap.from('.hero-link', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const title = 'Tyler Vovan'
  const splitTitle = title.split('').map((char, i) => (
    <span key={i} className="hero-title-letter inline-block">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <section
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center px-6"
    >
      <h1
        ref={titleRef}
        className="text-6xl font-bold tracking-tight sm:text-8xl md:text-9xl"
      >
        {splitTitle}
      </h1>

      <p
        ref={subtitleRef}
        className="mt-6 max-w-xl text-center text-lg text-neutral-400 sm:text-xl"
      >
        CS Student · Polymarket Builder · Creating things that matter
      </p>

      <div className="mt-12 flex gap-6">
        <a
          href="https://github.com/tylervovan"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-link text-sm uppercase tracking-widest text-neutral-400 transition-colors hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/tyler-vovan-30330b2a8"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-link text-sm uppercase tracking-widest text-neutral-400 transition-colors hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href="#contact"
          className="hero-link text-sm uppercase tracking-widest text-neutral-400 transition-colors hover:text-white"
        >
          Contact
        </a>
      </div>
    </section>
  )
}
