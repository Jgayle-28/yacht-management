import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Carousel from '../shared/Carousel'
import Modal from '../shared/Modal'
import foodImage from '../../assets/images/sections/food.webp'
import yachtVideo from '../../assets/videos/yacht.mp4'
import foodIcon from '../../assets/icons/food.svg'

const FoodSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section className='pt-48 px-4 md:px-16' id='food'>
        <div className=' flex items-center justify-center flex-col'>
          {/* <img src={toysImage} alt='Water Toys Splash' className='h-24 ' /> */}
          <div className='relative mt-6 flex-justify-center mx-auto mb-24'>
            <motion.span
              initial={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: 'easeInOut',
              }}
              whileInView={{
                height: 96,
                opacity: 1,
              }}
              className='absolute left-[50%] top-[1px] z-10 h-24 w-[2px] origin-top scale-0 bg-blue-950 transition-all duration-500 scale-100'
            />
          </div>
          <motion.h6
            initial={{
              y: 10,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.45,
              ease: 'easeInOut',
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className='mt-4 text-center text-4xl md:text-5xl font-normal md:font-light text-brandPrimary'
          >
            Ready for
          </motion.h6>
          <motion.h6
            initial={{
              y: 10,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: 'easeInOut',
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className='ml-10 text-center text-4xl md:text-5xl font-normal md:font-light text-brandPrimary'
          >
            A
          </motion.h6>
          <motion.h6
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
            className='mr-12 mb-1 text-center text-4xl md:text-5xl font-normal md:font-light text-brandPrimary'
          >
            Greek Meal
          </motion.h6>
          <motion.img
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
            src={foodIcon}
            alt='Water Toys Splash'
            className='h-20  mt-4'
          />
          <div className='relative mt-6 flex-justify-center mx-auto mb-48'>
            <motion.span
              initial={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: 'easeInOut',
              }}
              whileInView={{
                height: 96,
                opacity: 1,
              }}
              className='absolute left-[50%] top-[1px] z-10 h-24 w-[2px] origin-top scale-0 bg-blue-950 transition-all duration-500 scale-100'
            />
          </div>
        </div>
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
              className='text-2xl font-bold text-center text-brandPrimary'
            >
              “Kali Orexi!” ( Enjoy Your Meal! )
            </motion.h2>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: 200 }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              className='w-64 h-[2px] origin-center bg-brandPrimary my-4'
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
