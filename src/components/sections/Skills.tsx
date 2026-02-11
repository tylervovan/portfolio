'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  // Languages & Frameworks
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', strong: true },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'React Native', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'ROS2', icon: 'https://cdn.simpleicons.org/ros/22314E', strong: true },
  
  // Tools & Platforms
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Foxglove', icon: 'https://cdn.simpleicons.org/foxglove/8B5CF6' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/white' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3FCF8E', strong: true },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Cloudflare', icon: 'https://cdn.simpleicons.org/cloudflare/F38020', strong: true },
  { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe/635BFF' },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.from('.skill-icon', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: 'back.out(1.7)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-[60vh] px-6 py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="skills-title mb-16 text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Tech Stack
          </h2>
          <h3 className="mt-4 text-4xl font-bold md:text-5xl">
            Skills & Tools
          </h3>
        </div>

        <div className="skills-grid flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-icon group flex flex-col items-center gap-2"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-xl border p-3 transition-all duration-300 hover:scale-110 ${
                skill.strong 
                  ? 'border-[#2E5CFF]/50 bg-[#2E5CFF]/10 hover:border-[#2E5CFF] hover:bg-[#2E5CFF]/20' 
                  : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-600 hover:bg-neutral-800/50'
              }`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                />
              </div>
              <span className={`text-xs transition-colors group-hover:text-neutral-300 ${
                skill.strong ? 'text-neutral-300 font-medium' : 'text-neutral-500'
              }`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
