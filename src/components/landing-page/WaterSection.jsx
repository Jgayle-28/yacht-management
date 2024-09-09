import React from 'react'
import Carousel from '../shared/Carousel'

const WaterSection = () => {
  return (
    <section className='container mx-auto py-8 px-4 max-w-6xl'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-24 '>
        <div className='flex justify-center'>
          <img
            src='https://via.placeholder.com/400'
            alt='Section Image'
            className='w-full max-w-lg object-cover rounded-lg shadow-lg'
          />
        </div>

        <div>
          <h2 className='text-3xl font-bold'>Our Shade of Blue is Unique</h2>
          <div className='w-32 h-[2px] bg-brandPrimary my-3'></div>
          <p className='mb-4 text-lg text-gray-700'>
            We already know you have impeccable taste. Whether you're looking
            for a peaceful escape, a secluded sanctuary, or a tranquil oasis,
            we’re confident that one of our charters will transport you to a
            state of pure bliss. If it's a vibrant, lively celebration you
            seek—filled with boundless energy and exuberant fun—you can trust
            that we’ll deliver an unforgettable experience.
          </p>
          <p className='mb-4 text-lg text-gray-700'>
            At Ethos Yachting, we don’t just aim to please—we do it with flair,
            precision, and exceptional style. Whatever you desire, and however
            you envision it, we tailor our services to your preferences,
            offering as much or as little as you wish, all in a welcoming and
            warm environment. We follow your lead and turn your dreams into
            reality.
          </p>
        </div>
      </div>
      <Carousel />
    </section>
  )
}

export default WaterSection
