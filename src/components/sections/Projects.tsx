'use client'

import Link from 'next/link'

const projects = [
  {
    title: 'Kopycat',
    description: 'Polymarket whale tracking and copy trading platform. Monitor high-value trades in real-time and automate your prediction market strategy.',
    tags: ['TypeScript', 'Next.js', 'Hono', 'Redis'],
    link: 'https://github.com/tylervovan/kopycat',
    color: '#2E5CFF', // Polymarket blue
  },
  {
    title: 'Genki Reference',
    description: 'Japanese language learning tool for Genki textbook users. Quick reference for vocabulary, kanji, and grammar with search and flashcard features.',
    tags: ['TypeScript', 'React', 'Education', 'i18n'],
    link: 'https://genki-reference.vercel.app',
    color: '#EF4444', // Red (Japanese flag inspired)
  },
  {
    title: 'MediVision',
    description: 'AI-powered health screening mobile app. Uses computer vision to detect potential health issues from user-submitted images.',
    tags: ['React Native', 'TypeScript', 'AI/ML', 'Mobile'],
    link: 'https://landing-medivision.vercel.app/',
    color: '#10B981', // Green
  },
  {
    title: 'SC Robotics',
    description: 'Building the GUI and integrating science system hardware with the new control system for Saddleback College Robotics competition rover.',
    tags: ['Python', 'ROS2', 'Foxglove', 'Hardware'],
    link: 'https://saddlebackcollegerobotics.com/index.html',
    color: '#F59E0B', // Amber
  },
]

export function Projects() {

  return (
    <section
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

        <div className="projects-grid grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : undefined}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="project-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 p-6 backdrop-blur-xl backdrop-saturate-[180%] shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
            >
              {/* Glass shine effect */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.1)',
                }}
              />
              
              {/* Top edge highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-15"
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
                      className="rounded-full bg-white/[0.08] px-3 py-1 text-xs text-neutral-300 border border-white/[0.05] transition-colors duration-300 group-hover:bg-white/15 group-hover:border-white/10"
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
