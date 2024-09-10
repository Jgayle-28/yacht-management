import React from 'react'
import { motion } from 'framer-motion'
import journeyDots from '../../assets/images/sections/journey-dots.svg'
import Carousel from '../shared/Carousel'

const ChooseAYacht = () => {
  return (
    <section className='pt-48 px-4 md:px-16'>
      <div className='container mx-auto max-w-6xl'>
        {/* Dots intro */}
        {/* <div className='relative'>
          <span className='absolute left-[1px] top-[1px] z-10 h-24 w-[2px] origin-top scale-0 bg-blue-950 transition-all duration-500 scale-100' />
          <span className='absolute left-[1px] top-[1px] z-10 h-[2px] w-24 origin-left scale-0 bg-blue-950 transition-all duration-500 scale-100' />
        </div> */}
        <div className='flex items-start ml-48'>
          <div className='relative mt-4 mr-32'>
            <motion.span
              initial={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.55,
                ease: 'easeInOut',
              }}
              whileInView={{
                height: 96,
                opacity: 1,
              }}
              className='absolute left-[1px] top-[1px] z-10 h-24 w-[2px] origin-top scale-0 bg-blue-950 transition-all duration-500 scale-100'
            />
            <motion.span
              initial={{
                width: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.55,
                ease: 'easeInOut',
              }}
              whileInView={{
                width: 96,
                opacity: 1,
              }}
              className='absolute left-[1px] top-[1px] z-10 h-[2px] w-24 origin-right scale-0 bg-blue-950 transition-all duration-500 scale-100'
            />
          </div>
          <div>
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
              className='text-3xl font-bold text-center text-neutral-800'
            >
              Your Adventure Awaits
            </motion.h2>
            <motion.p
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
              className='text-center max-w-lg mx-auto mt-4 text-neutral-500'
            >
              We understand that one size doesn’t fit all...
            </motion.p>
          </div>
        </div>

        {/* Carousel header */}
        <div className='mt-24 mb-12'>
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
            className='text-3xl font-bold text-neutral-800'
          >
            Select Your Yacht
          </motion.h2>
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
            className='w-64 h-[2px] bg-blue-950 my-4'
          />
          <motion.p
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
            className='text-neutral-500'
          >
            Start your enchanting journey by selecting the yacht that perfectly
            suits your needs.
          </motion.p>
        </div>
        <Carousel />
        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
          <div className='bg-white shadow-md rounded-lg p-6'>
            <img
              src='https://source.unsplash.com/featured/?yacht'
              alt='Yacht'
              className='w-full h-48 object-cover rounded-md'
            />
            <h3 className='text-xl font-bold mt-4'>Luxury Yacht</h3>
            <p className='text-gray-600 mt-2'>
              Experience the ultimate in luxury and comfort on a private yacht.
              Our luxury yachts are perfect for a romantic getaway or a family
              vacation.
            </p>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700'>
              Learn More
            </button>
          </div>

          <div className='bg-white shadow-md rounded-lg p-6'>
            <img
              src='https://source.unsplash.com/featured/?sailboat'
              alt='Sailboat'
              className='w-full h-48 object-cover rounded-md'
            />
            <h3 className='text-xl font-bold mt-4'>Sailboat</h3>
            <p className='text-gray-600 mt-2'>
              Set sail on a classic sailboat and experience the thrill of the
              open sea. Our sailboats are perfect for adventure seekers and
              sailing enthusiasts.
            </p>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700'>
              Learn More
            </button>
          </div>
          <div className='bg-white shadow-md rounded-lg p-6'>
            <img
              src='https://source.unsplash.com/featured/?catamaran'
              alt='Catamaran'
              className='w-full h-48 object-cover rounded-md'
            />
            <h3 className='text-xl font-bold mt-4'>Catamaran</h3>
            <p className='text-gray-600 mt-2'>
              Cruise the crystal-clear waters on a spacious catamaran. Our
              catamarans are perfect for large groups and family vacations.
            </p>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700'>
              Learn More
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default ChooseAYacht
