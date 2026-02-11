'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    if (!cursor || !cursorDot) return

    // Set up GSAP quick setters for performance
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.6, ease: 'power3' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.6, ease: 'power3' })
    const xToDot = gsap.quickTo(cursorDot, 'x', { duration: 0.1, ease: 'power3' })
    const yToDot = gsap.quickTo(cursorDot, 'y', { duration: 0.1, ease: 'power3' })

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      xToDot(e.clientX)
      yToDot(e.clientY)
    }

    // Scale up on hovering interactive elements
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 mix-blend-difference md:block"
      />
      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference md:block"
      />
    </>
  )
}
