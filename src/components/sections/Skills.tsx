'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C++', level: 75 },
      { name: 'JavaScript', level: 90 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'React Native', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'GSAP', level: 70 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Hono / Express', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'Vercel', level: 85 },
      { name: 'Supabase', level: 80 },
    ],
  },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from('.skills-title', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-title',
          start: 'top 85%',
        },
      })

      // Animate skill categories
      gsap.from('.skill-category', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
        },
      })

      // Animate skill bars
      const bars = document.querySelectorAll('.skill-bar-fill')
      bars.forEach((bar) => {
        const level = bar.getAttribute('data-level')
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${level}%`,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="skills-title mb-16 text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            What I Work With
          </h2>
          <h3 className="mt-4 text-4xl font-bold md:text-5xl">
            Skills & Technologies
          </h3>
        </div>

        <div className="skills-grid grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm"
            >
              <h4 className="mb-6 text-lg font-semibold text-white">
                {category.title}
              </h4>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-neutral-300">{skill.name}</span>
                      <span className="text-neutral-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-neutral-800">
                      <div
                        className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-[#2E5CFF] to-[#7C3AED]"
                        data-level={skill.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
