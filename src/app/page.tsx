import { Hero } from '@/components/sections/Hero'
import { DitherSphere } from '@/components/ui/DitherSphere'

export default function Home() {
  return (
    <main>
      <DitherSphere />
      <Hero />
      
      {/* About Section - Coming Soon */}
      <section id="about" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold">About</h2>
          <p className="mt-6 text-lg text-neutral-400">
            Coming soon...
          </p>
        </div>
      </section>

      {/* Projects Section - Coming Soon */}
      <section id="projects" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="mt-6 text-lg text-neutral-400">
            Coming soon...
          </p>
        </div>
      </section>

      {/* Contact Section - Coming Soon */}
      <section id="contact" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="mt-6 text-lg text-neutral-400">
            Coming soon...
          </p>
        </div>
      </section>
    </main>
  )
}
