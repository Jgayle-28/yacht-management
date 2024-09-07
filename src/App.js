import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navigation from './components/navigation'
import IntroSection from './components/landing-page/IntroSection'
import Hero from './components/landing-page/Hero'
import ChooseAYacht from './components/landing-page/ChooseAYacht'
import ChooseADestination from './components/landing-page/ChooseADestination'
import AddToys from './components/landing-page/AddToys'

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
      <AddToys />
    </div>
  )
}

export default App
