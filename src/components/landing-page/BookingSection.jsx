import React from 'react'
import { motion } from 'framer-motion'
import bookingImage from '../../assets/images/sections/booking-2.jpg'
import { useRouter } from '../../hooks/use-router'

const BookingSection = () => {
  const router = useRouter()
  return (
    <>
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
          className='text-4xl md:text-5xl font-normal md:font-light text-brandPrimary'
        >
          Get started now!
        </motion.h2>
        <motion.div
          initial={{ width: '0%' }}
          whileInView={{ width: 200 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          className='w-64 h-[2px] origin-center bg-brandPrimary my-4'
        />
      </div>
      {/* <div className='flex items-center justify-center flex-col mb-24'>
        
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
          Get
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
          className='ml-20 text-center text-4xl md:text-5xl font-normal md:font-light text-brandPrimary'
        >
          Started
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
          className='mr-6 mb-1 text-center text-4xl md:text-5xl font-normal md:font-light text-brandPrimary'
        >
          Now
        </motion.h6>
      
      </div> */}
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
            onClick={() => router.push('/make-request')}
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
            className='px-6 py-3 border border-white text-white font-light transition hover:bg-white hover:text-black duration-500'
          >
            Make a request now!
          </motion.button>
        </div>
      </section>
    </>
  )
}

export default BookingSection
