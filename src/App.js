import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navigation from './components/navigation'
import IntroSection from './components/landing-page/IntroSection'
import Hero from './components/landing-page/Hero'
import ChooseAYacht from './components/landing-page/ChooseAYacht'
import ChooseADestination from './components/landing-page/ChooseADestination'
import AddToys from './components/landing-page/AddToys'
import FoodSection from './components/landing-page/FoodSection'
import WaterSection from './components/landing-page/WaterSection'
import ExploreSection from './components/landing-page/ExploreSection'
import BookingSection from './components/landing-page/BookingSection'
import Footer from './components/footer/Footer'

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
      <FoodSection />
      <WaterSection />
      <ExploreSection />
      <BookingSection />
      <Footer />
    </div>
  )
}

export default App
