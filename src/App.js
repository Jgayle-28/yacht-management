import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navigation from './components/navigation'
import IntroSection from './components/IntroSection'
import Hero from './components/Hero'
import ChooseAYacht from './components/ChooseAYacht'
import ChooseADestination from './components/ChooseADestination'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <div>
      <Navigation />
      <Hero />
      <IntroSection />
      <ChooseAYacht />
      <ChooseADestination />
    </div>
  )
}

export default App
