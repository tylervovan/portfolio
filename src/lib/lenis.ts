import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export const initLenis = (): Lenis => {
  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time: number) {
    lenisInstance?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return lenisInstance
}

export const getLenis = (): Lenis | null => lenisInstance

export const destroyLenis = () => {
  lenisInstance?.destroy()
  lenisInstance = null
}
