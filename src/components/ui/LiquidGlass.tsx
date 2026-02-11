'use client'

import { useEffect, useRef } from 'react'

export function LiquidGlass() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Subtle mouse parallax for the blobs
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPercent = (clientX / innerWidth - 0.5) * 20
      const yPercent = (clientY / innerHeight - 0.5) * 20
      
      const blobs = containerRef.current.querySelectorAll('.glass-blob')
      blobs.forEach((blob, i) => {
        const el = blob as HTMLElement
        const factor = (i + 1) * 0.5
        el.style.transform = `translate(${xPercent * factor}px, ${yPercent * factor}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Gradient blobs with blur */}
      <div
        className="glass-blob absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl transition-transform duration-700 ease-out"
        style={{ background: 'radial-gradient(circle, #2E5CFF 0%, transparent 70%)' }}
      />
      <div
        className="glass-blob absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl transition-transform duration-700 ease-out"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
      />
      <div
        className="glass-blob absolute -bottom-32 left-1/3 h-[400px] w-[400px] rounded-full opacity-25 blur-3xl transition-transform duration-700 ease-out"
        style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
