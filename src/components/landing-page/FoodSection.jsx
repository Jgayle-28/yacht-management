import React, { useState } from 'react'
import Carousel from '../shared/Carousel'
import Modal from '../shared/Modal'
import foodImage from '../../assets/images/sections/food.webp'
import yachtVideo from '../../assets/videos/yacht.mp4'
import { motion } from 'framer-motion'

const FoodSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section className='pt-48 px-4 md:px-16' id='food'>
        <div className='container mx-auto max-w-6xl'>
          {/* Image Section */}
          <motion.div
            initial={{
              y: 10,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: 'easeInOut',
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className='w-full mb-8 cursor-pointer'
            onClick={() => setIsOpen(true)}
          >
            <img
              src={foodImage}
              alt='Food Image'
              className='w-full h-[550px] object-cover rounded-sm shadow-lg'
            />
          </motion.div>

          {/* Carousel Section */}
          <div className='w-full'>
            <Carousel />
          </div>
          <div className='w-full flex flex-col items-center my-24'>
            <motion.h2
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                ease: 'easeInOut',
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className='text-2xl font-bold text-center text-neutral-800'
            >
              “Kali Orexi!” ( Enjoy Your Meal! )
            </motion.h2>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: 200 }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              className='w-64 h-[2px] origin-center bg-blue-950 my-4'
            />
            <motion.p
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.75,
                ease: 'easeInOut',
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className='max-w-5xl pb-12 text-center text-neutral-500'
            >
              We take great pride in the exceptional quality of our local Greek
              produce. Our highly skilled onboard chefs are eager to prepare
              fresh, sumptuous, and mouth-watering culinary delights just for
              you. Paired with a selection of fine wines and beverages, you're
              guaranteed a true feast for your taste buds.
            </motion.p>
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
