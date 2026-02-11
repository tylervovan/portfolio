'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function DitherSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0 })
  const opacityRef = useRef(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !canvasRef.current || !containerRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Sphere parameters
    const sphereRadius = Math.min(window.innerWidth, window.innerHeight) * 0.25
    const dotSpacing = 8
    const maxDotSize = 4
    let rotation = 0

    // Animate position and fade out after hero
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: '50% top', // Fade out by halfway down the page
      scrub: 1,
      onUpdate: (self) => {
        // Fade out as you scroll past hero (0-100% of first half = 1-0 opacity)
        opacityRef.current = 1 - self.progress
        if (containerRef.current) {
          containerRef.current.style.opacity = String(opacityRef.current)
        }
      },
    })

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2 + positionRef.current.x
      const centerY = canvas.height / 2

      // Draw dithered sphere
      for (let lat = -90; lat <= 90; lat += dotSpacing / 2) {
        const latRad = (lat * Math.PI) / 180
        const ringRadius = Math.cos(latRad) * sphereRadius
        const y = centerY + Math.sin(latRad) * sphereRadius

        // Number of dots in this ring
        const circumference = 2 * Math.PI * ringRadius
        const numDots = Math.max(1, Math.floor(circumference / dotSpacing))

        for (let i = 0; i < numDots; i++) {
          const angle = (i / numDots) * Math.PI * 2 + rotation

          // 3D to 2D projection
          const x3d = Math.cos(angle) * ringRadius
          const z3d = Math.sin(angle) * ringRadius

          // Only draw dots on the front half
          if (z3d < 0) continue

          const x = centerX + x3d

          // Calculate lighting (simple directional light from top-right)
          const nx = x3d / sphereRadius
          const ny = (y - centerY) / sphereRadius
          const nz = z3d / sphereRadius

          // Light direction (normalized)
          const lx = 0.5
          const ly = -0.5
          const lz = 0.7

          const light = Math.max(0, nx * lx + ny * ly + nz * lz)

          // Rim light
          const rim = Math.pow(1 - nz, 2) * 0.3

          const brightness = Math.min(1, light * 0.8 + rim + 0.15)

          // Halftone effect: dot size varies with brightness
          const dotSize = brightness * maxDotSize

          // Add depth fade
          const depthFade = 0.3 + (z3d / sphereRadius) * 0.7

          ctx.beginPath()
          ctx.arc(x, y, dotSize * depthFade, 0, Math.PI * 2)
          // Polymarket blue: #2E5CFF (RGB: 46, 92, 255)
          ctx.fillStyle = `rgba(46, 92, 255, ${brightness * depthFade})`
          ctx.fill()
        }
      }

      rotation += 0.003
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
      scrollTrigger.kill()
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
      />
    </div>
  )
}
