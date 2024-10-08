import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import Navigation from './components/navigation'
import Footer from './components/footer/Footer'
// Pages
import LandingPage from './pages/LandingPage'
import YachtsPage from './pages/YachtsPage'
import DestinationsPage from './pages/DestinationsPage'
import FocusDestinationPage from './pages/FocusDestinationPage'
import MakeRequestPage from './pages/MakeRequestPage'
import FocusYachtPage from './pages/FocusYachtPage'
import FoodPage from './pages/FoodPage'
import ToysPage from './pages/ToysPage'
import YachtManagementPage from './pages/YachtManagementPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ExperienceOnBoard from './components/ExperienceOnBoard'

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
    <div id='top'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<YachtManagementPage />} />
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/experience' element={<ExperienceOnBoard />} />
          <Route path='/yachts' element={<YachtsPage />} />
          <Route path='/yachts/:yachtName' element={<FocusYachtPage />} />
          <Route path='/destinations' element={<DestinationsPage />} />
          <Route
            path='/destinations/:destination/:id'
            element={<FocusDestinationPage />}
          />
          <Route path='/make-request' element={<MakeRequestPage />} />
          <Route path='/food' element={<FoodPage />} />
          <Route path='/toys' element={<ToysPage />} />
          <Route path='/management' element={<YachtManagementPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
