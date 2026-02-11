import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
// import { DitherSphere } from '@/components/ui/DitherSphere'
import { LiquidGlass } from '@/components/ui/LiquidGlass'

export default function Home() {
  return (
    <main className="relative">
      {/* <DitherSphere /> */}
      <LiquidGlass />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}
