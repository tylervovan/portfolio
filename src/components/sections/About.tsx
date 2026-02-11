'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on the decorative elements
      gsap.to('.parallax-slow', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to('.parallax-fast', {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Fade in text on scroll
      gsap.from(textRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      // Stagger in stats
      gsap.from('.stat-item', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen overflow-hidden px-6 py-32"
    >
      {/* Parallax decorative elements */}
      <div className="parallax-slow absolute -right-20 top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="parallax-fast absolute -left-32 bottom-40 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text content */}
          <div ref={textRef}>
            <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              About Me
            </h2>
            <h3 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Building the future,
              <br />
              <span className="text-neutral-400">one project at a time</span>
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-neutral-400">
              I&apos;m a first-year Computer Science student at Saddleback College 
              with a passion for building impactful software. From prediction market 
              tools to mobile health apps, I love tackling complex problems with 
              elegant solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400">
              When I&apos;m not coding, you&apos;ll find me contributing to 
              the Saddleback Robotics team or exploring the latest in AI 
              and quantitative trading.
            </p>
          </div>

          {/* Stats grid with parallax */}
          <div ref={imageRef} className="stats-grid grid grid-cols-2 gap-6">
            <div className="stat-item rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-white">15+</div>
              <div className="mt-2 text-sm text-neutral-400">Projects Built</div>
            </div>
            <div className="stat-item rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-white">3</div>
              <div className="mt-2 text-sm text-neutral-400">Languages</div>
            </div>
            <div className="stat-item rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-white">1yr</div>
              <div className="mt-2 text-sm text-neutral-400">Experience</div>
            </div>
            <div className="stat-item rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#2E5CFF]">∞</div>
              <div className="mt-2 text-sm text-neutral-400">Curiosity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
