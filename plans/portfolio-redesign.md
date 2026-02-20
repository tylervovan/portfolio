# Portfolio Redesign Plan — tylervovan.com

**Direction:** Clean, minimal, designer-forward (inspired by liumichelle.com)
**Stack migration:** Next.js → Vite + React + React Router
**Timeline:** Build over a few weeks
**Keep:** LiquidGlass background effect
**Remove:** DitherSphere

---

## Stack

| Layer | Tool |
|-------|------|
| Build | Vite |
| Framework | React 19 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion (page transitions, micro-interactions) + GSAP (scroll-driven, complex timelines) |
| 3D | Three.js (keep LiquidGlass, potential hero enhancements) |
| Smooth scroll | Lenis |
| Typography | Manrope (headings) + DM Sans (body) via Google Fonts |
| Deploy | Vercel (static SPA) or Cloudflare Pages |

---

## Site Map

```
/                    → Hero + brief intro + project previews
/work                → Project grid with hover previews
/work/kopycat        → Case study: Kopycat
/work/peptide-place  → Case study: Peptide Place
/work/genki          → Case study: Genki Reference
/work/bay-honors     → Case study: Bay Honors Research (once complete)
/about               → Story, skills, journey, Saddleback → SCU
/resume              → Interactive resume + PDF download + QR codes
```

---

## Phase 1: Vite Migration + Page Structure (Week 1)

### 1a. Scaffold Vite project
- `bun create vite portfolio-v2 --template react-ts`
- Install deps: `react-router`, `framer-motion`, `gsap`, `lenis`, `three`, `tailwindcss`
- Set up Tailwind v4 with Vite plugin
- Set up Google Fonts (Manrope + DM Sans)

### 1b. Migrate existing components
- Move LiquidGlass (CSS blobs + mouse parallax — no changes needed)
- Move SmoothScroll / Lenis setup
- Move custom cursor if desired
- Delete DitherSphere

### 1c. Route structure
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/work" element={<Work />} />
  <Route path="/work/:slug" element={<CaseStudy />} />
  <Route path="/about" element={<About />} />
  <Route path="/resume" element={<Resume />} />
</Routes>
```

### 1d. Page transition wrapper
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={location.pathname}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    <Outlet />
  </motion.div>
</AnimatePresence>
```

---

## Phase 2: Home Page (Week 1-2)

### Hero
- Tyler Vovan — large, clean typography (Manrope 700)
- Subtitle: "CS & Data Science · Building things that matter"
- LiquidGlass ambient blobs in background
- Subtle scroll indicator
- Nav: Work / About / Resume (minimal, top-right)

### Project Previews (below fold)
- 2-3 featured projects with hover preview (screenshot or embedded frame)
- Clean grid, generous whitespace
- Click → /work/[slug]

### Footer
- GitHub / LinkedIn / Email links
- Minimal, same energy as hero links

---

## Phase 3: Work Page + Case Studies (Week 2-3)

### /work — Project Grid
- Card-based grid with project thumbnail, title, tags
- Hover: subtle scale + reveal description
- Filter by tag? (optional — might be overkill for 4 projects)

### Case Study Template (/work/[slug])
Each case study follows this scroll-driven structure:

1. **Hero banner** — Project name, one-liner, hero screenshot/embed
2. **Overview** — What it is, role, timeline, stack
3. **Problem** — What problem does it solve?
4. **Process** — Key decisions, architecture, interesting challenges
5. **Screenshots/embeds** — Full-width images, embedded live sites, video demos
6. **Results/Impact** — Metrics, learnings, what's next
7. **Next project** — Link to the next case study

### Project-specific content:

**Kopycat** (flagship)
- Live site embed or screenshots from the dashboard
- Architecture diagram (Turborepo + Bun + Hono + Next.js)
- Whale tracking visualization
- Copy trading flow explanation
- Tech: real-time WebSocket feeds, Polymarket CLOB API

**Peptide Place**
- E-commerce storefront screenshots
- Admin dashboard / product management
- Lab report upload flow
- Tech: Next.js, Vercel, Supabase

**Genki Reference**
- Screenshots / demo
- What it does, who it's for

**Bay Honors Research** (future)
- Research methodology
- Data visualizations
- Findings summary

### Screenshot strategy
- Capture live sites via browser automation or manual screenshots
- Use consistent framing (browser mockup or clean device frames)
- Store in `/public/projects/[slug]/`

---

## Phase 4: About Page (Week 2)

- Photo (optional)
- Story: journey from SoCal → Saddleback → building projects → SCU transfer
- Skills grid (languages, tools, frameworks) — visual, not just a list
- Interests: robotics, crypto/prediction markets, creative coding
- Timeline of key milestones? (optional)

---

## Phase 5: Resume Page (Week 2)

- Interactive resume layout (not just a PDF embed)
- Sections: Education, Experience, Projects, Skills
- PDF download button
- QR code that links back to the site (for physical events/handouts)

---

## Phase 6: Polish (Week 3)

### Micro-interactions
- Hover effects on all links/buttons (underline slides, color transitions)
- Scroll-triggered reveals (staggered fade-in for lists/grids)
- Cursor trail or custom cursor (you already have Cursor.tsx)
- Smooth scroll anchor links

### Typography
- Manrope 700 for headings (h1-h3)
- DM Sans 400/500 for body + UI
- Generous line-height, letter-spacing on headings

### Responsive
- Mobile-first, test on phone
- Nav becomes hamburger/drawer on mobile
- Project grid stacks to single column

### Performance
- Lazy load images + project embeds
- Code-split routes (React Router lazy)
- Optimize Three.js — only load on home page
- Preload critical fonts

### SEO (even on SPA)
- React Helmet for meta tags per page
- Prerender with vite-plugin-ssr or react-snap for crawlers
- OG images per page (especially project pages)

---

## Design Tokens

```css
/* Colors — dark minimal palette */
--bg:          #0a0a0a
--bg-subtle:   #111111
--text:        #fafafa
--text-muted:  #a3a3a3
--accent:      #2E5CFF (from LiquidGlass)
--accent-alt:  #8B5CF6

/* Spacing — generous */
--section-gap: 120px (desktop), 80px (mobile)
--content-max: 1200px

/* Border radius */
--radius-sm:   8px
--radius-md:   16px
--radius-lg:   24px
```

---

## Migration Checklist

- [ ] Scaffold Vite + React + Tailwind
- [ ] Set up React Router with AnimatePresence
- [ ] Migrate LiquidGlass
- [ ] Build nav component
- [ ] Build home page (hero + project previews)
- [ ] Build /work grid page
- [ ] Build case study template
- [ ] Write Kopycat case study
- [ ] Write Peptide Place case study
- [ ] Write Genki case study
- [ ] Build /about page
- [ ] Build /resume page
- [ ] Add micro-interactions (Framer Motion)
- [ ] Typography upgrade
- [ ] Mobile responsive pass
- [ ] Performance + SEO
- [ ] Deploy to Vercel
- [ ] Add QR codes
- [ ] Swap DNS from old site

---

*Created: 2026-02-19*
