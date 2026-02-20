export interface Project {
  slug: string
  name: string
  description: string
  tags: string[]
  thumbnail?: string
  comingSoon?: boolean
  featured?: boolean
  url?: string
}

export const projects: Project[] = [
  {
    slug: 'kopycat',
    name: 'Kopycat',
    description:
      'Real-time crypto copy trading platform with whale tracking and Polymarket CLOB API integration. Built on a Turborepo monorepo with Bun + Hono.',
    tags: ['TypeScript', 'Bun', 'Hono', 'Next.js', 'WebSocket'],
    featured: true,
  },
  {
    slug: 'peptide-place',
    name: 'Peptide Place',
    description:
      'Full-stack e-commerce platform for research peptides with admin dashboard, product management, and lab report uploads.',
    tags: ['Next.js', 'Supabase', 'Vercel', 'TypeScript'],
    featured: true,
  },
  {
    slug: 'genki',
    name: 'Genki Reference',
    description:
      'Digital companion for the Genki Japanese textbook series with interactive grammar tables and vocabulary drills.',
    tags: ['React', 'TypeScript'],
    featured: true,
  },
  {
    slug: 'bay-honors',
    name: 'Bay Honors Research',
    description:
      'Academic research project — data analysis and visualization for bay conservation studies.',
    tags: ['Python', 'Data Science'],
    featured: false,
    comingSoon: true,
  },
]
