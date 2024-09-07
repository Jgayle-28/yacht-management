import React from 'react'
import Carousel from '../shared/Carousel'

const ChooseADestination = () => {
  return (
    <section className='pt-48 px-4 md:px-16'>
      <div className='container mx-auto max-w-6xl'>
        {/* Carousel header */}
        <div className='mt-24 mb-12'>
          <h2 className='text-3xl font-bold'>Select Your Yacht</h2>
          <div className='w-32 h-[2px] bg-brandPrimary my-3'></div>
          <p>
            Greece has an undeniable, almost mystical allure that’s difficult to
            put into words but easy to feel. Each island offers something
            special—every port, shore, and town is unique, with its own vibrant
            colors, scents, and atmosphere.
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  )
}

export default ChooseADestination
