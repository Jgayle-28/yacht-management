import React from 'react'
import { motion } from 'framer-motion'
import bookingImage from '../../assets/images/sections/booking-2.jpg'

const BookingSection = () => {
  return (
    <section
      className='relative flex items-center justify-center h-[600px] bg-cover bg-center text-white'
      style={{
        backgroundImage: `linear-gradient(rgba(23, 37, 84, .4), rgba(23, 37, 84, .4)), url(${bookingImage})`,
      }}
    >
      <div className='text-center'>
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
          className='text-4xl font-bold mb-4'
        >
          Luxurious Experiences,
        </motion.h2>
        <motion.h2
          initial={{
            y: 10,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: 'easeInOut',
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          className='text-4xl font-bold mb-4 ml-12'
        >
          Enduring Memories,
        </motion.h2>
        <motion.h2
          initial={{
            y: 10,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.35,
            ease: 'easeInOut',
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          className='text-4xl font-bold mb-4 ml-20'
        >
          Affordable Prices...
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
          className='text-lg mb-6'
        >
          Choose a date, choose a yacht, and let us take care of the rest...
        </motion.p>
        <motion.button
          initial={{
            y: 5,
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
          className='px-6 py-3 border border-white text-white font-semibold rounded transition hover:bg-white hover:text-black'
        >
          Make a request now!
        </motion.button>
      </div>
    </section>
  )
}

export default BookingSection
