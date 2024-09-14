import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import Navigation from './components/navigation'
import Footer from './components/footer/Footer'
import LandingPage from './pages/LandingPage'
import YachtsPage from './pages/YachtsPage'
import DestinationsPage from './pages/DestinationsPage'

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
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/yachts' element={<YachtsPage />} />
          <Route path='/destinations' element={<DestinationsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
