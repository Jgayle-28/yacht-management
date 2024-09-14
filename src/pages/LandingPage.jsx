import React from 'react'
import {
  AddToys,
  BookingSection,
  ChooseADestination,
  ChooseAYacht,
  ExploreSection,
  FoodSection,
  Hero,
  IntroSection,
  WaterSection,
} from '../components/landing-page'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <IntroSection />
      <ChooseAYacht />
      <ChooseADestination />
      <AddToys />
      <FoodSection />
      <WaterSection />
      <ExploreSection />
      <BookingSection />
    </div>
  )
}

export default LandingPage
