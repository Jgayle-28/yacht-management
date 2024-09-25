import React from 'react'
import AddToys from './landing-page/AddToys'
import ChooseADestination from './landing-page/ChooseADestination'
import FoodSection from './landing-page/FoodSection'

const ExperienceOnBoard = () => {
  return (
    <section className='w-full'>
      <FoodSection />
      <AddToys />
      <ChooseADestination />
    </section>
  )
}

export default ExperienceOnBoard
