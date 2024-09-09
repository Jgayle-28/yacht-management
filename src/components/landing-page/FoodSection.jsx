import React, { useState } from 'react'
import Carousel from '../shared/Carousel'
import Modal from '../shared/Modal'
import foodImage from '../../assets/images/sections/food.webp'
import yachtVideo from '../../assets/videos/yacht.mp4'

const FoodSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section className='pt-48 px-4 md:px-16'>
        <div className='container mx-auto max-w-6xl'>
          {/* Image Section */}
          <div
            className='w-full mb-8 cursor-pointer'
            onClick={() => setIsOpen(true)}
          >
            <img
              src={foodImage}
              alt='Food Image'
              className='w-full h-[550px] object-cover rounded-sm shadow-lg'
            />
          </div>

          {/* Carousel Section */}
          <div className='w-full'>
            <Carousel />
          </div>
          <div className='w-full flex flex-col items-center my-24'>
            <h2 className='text-2xl font-bold'>
              “Kali Orexi!” ( Enjoy Your Meal! )
            </h2>
            <div className='w-64 h-[2px] bg-brandPrimary mx-auto my-8'></div>
            <p className='max-w-5xl pb-12 text-center'>
              We take great pride in the exceptional quality of our local Greek
              produce. Our highly skilled onboard chefs are eager to prepare
              fresh, sumptuous, and mouth-watering culinary delights just for
              you. Paired with a selection of fine wines and beverages, you're
              guaranteed a true feast for your taste buds.
            </p>
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className='w-'>
          <video className='h-full w-full object-cover' controls>
            <source src={yachtVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </>
  )
}

export default FoodSection
