'use client'

import { useEffect } from 'react'
import { initLenis, destroyLenis } from '@/lib/lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = initLenis()

    return () => {
      destroyLenis()
    }
  }, [])

  return <>{children}</>
}
