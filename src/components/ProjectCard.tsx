import { Link } from 'react-router'
import type { Project } from '../lib/projects'

const CARD_GRADIENTS: Record<string, string> = {
  kopycat: 'from-[#2E5CFF]/20 to-[#06B6D4]/10',
  'peptide-place': 'from-[#8B5CF6]/20 to-[#2E5CFF]/10',
  genki: 'from-[#06B6D4]/20 to-[#8B5CF6]/10',
  'bay-honors': 'from-[#a3a3a3]/10 to-transparent',
}

export function ProjectCard({ project }: { project: Project }) {
  const gradient = CARD_GRADIENTS[project.slug] ?? 'from-white/5 to-transparent'
  const href = project.comingSoon ? undefined : `/work/${project.slug}`

  return (
    <Link
      to={href ?? '#'}
      onClick={!href ? (e) => e.preventDefault() : undefined}
      className="group relative block rounded-2xl overflow-hidden border border-white/5 bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
      aria-disabled={project.comingSoon}
    >
      {/* Thumbnail */}
      <div className={`h-52 relative overflow-hidden bg-gradient-to-br ${gradient}`}>
        {project.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs uppercase tracking-widest text-[#a3a3a3]/60 border border-white/10 rounded-full px-4 py-1.5">
              Coming Soon
            </span>
          </div>
        )}
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading font-bold text-lg text-[#fafafa] group-hover:text-white transition-colors">
            {project.name}
          </h3>
          {!project.comingSoon && (
            <span className="text-[#a3a3a3] flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              ↗
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-[#a3a3a3] leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-[#a3a3a3]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
