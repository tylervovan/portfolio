import { useLocation, Outlet } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import { Nav } from './Nav'
import { LiquidGlass } from './LiquidGlass'
import { SmoothScroll } from './SmoothScroll'
import { PageTransition } from './PageTransition'

export function Layout() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen">
      <LiquidGlass />
      <Nav />
      <SmoothScroll>
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
      </SmoothScroll>
    </div>
  )
}
