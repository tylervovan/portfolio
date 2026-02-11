'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Kopycat',
    description: 'Polymarket whale tracking and copy trading platform. Monitor high-value trades in real-time and automate your prediction market strategy.',
    tags: ['TypeScript', 'Next.js', 'Hono', 'Redis'],
    link: 'https://github.com/tylervovan/kopycat',
    color: '#2E5CFF', // Polymarket blue
  },
  {
    title: 'Medivision',
    description: 'AI-powered health screening mobile app. Uses computer vision to detect potential health issues from user-submitted images.',
    tags: ['React Native', 'TypeScript', 'AI/ML', 'Mobile'],
    link: '#',
    color: '#10B981', // Green
  },
  {
    title: 'SC Robotics',
    description: 'Contributing to Saddleback College Robotics team. Building science payloads and GUIs for competition robots.',
    tags: ['Python', 'C++', 'Hardware', 'Team'],
    link: 'https://github.com/SaddlebackCollegeRobotics',
    color: '#F59E0B', // Amber
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from('.projects-title', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 85%',
        },
      })

      // Stagger project cards
      gsap.from('.project-card', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="projects-title mb-16 text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Featured Work
          </h2>
          <h3 className="mt-4 text-4xl font-bold md:text-5xl">
            Projects I&apos;ve Built
          </h3>
        </div>

        <div className="projects-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : undefined}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="project-card group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-neutral-700 hover:shadow-2xl"
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
              />

              {/* Accent line */}
              <div
                className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: project.color }}
              />

              <div className="relative z-10">
                <h4 className="text-xl font-bold transition-colors duration-300 group-hover:text-white">
                  {project.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300 transition-colors duration-300 group-hover:bg-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-sm text-neutral-500 transition-colors duration-300 group-hover:text-white">
                  <span>View Project</span>
                  <svg
                    className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
