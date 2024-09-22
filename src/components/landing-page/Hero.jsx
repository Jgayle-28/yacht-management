import React from 'react'
import { motion } from 'framer-motion'
import heroImage from '../../assets/images/hero-image.jpeg'

const Hero = () => {
  return (
    <div
      className='relative h-screen bg-cover bg-center w-full'
      style={{
        backgroundImage: `linear-gradient(rgba(23, 37, 84, .4), rgba(23, 37, 84, .4)),url(${heroImage})`,
      }}
    >
      <div className='container mx-auto max-w-5xl h-full flex items-center px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left'>
          {/* Left Column */}
          <div className='text-white space-y-4'>
            <motion.h1
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.75,
                delay: 0.25,
                ease: 'easeInOut',
              }}
              className='mb-3 text-5xl md:text-3xl font-light leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-8xl lg:leading-tight'
            >
              Premier Yachting in Greece
            </motion.h1>
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 200,
                opacity: 1,
              }}
              transition={{
                duration: 0.75,
                delay: 0.5,
                ease: 'easeInOut',
              }}
              className='w-32 h-[2px] bg-white my-3 mx-auto md:mx-0'
            />
            <motion.p
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.75,
                delay: 0.5,
                ease: 'easeInOut',
              }}
              className='text-lg md:text-xl font-light'
            >
              Catamarans & Motor Boats
            </motion.p>
          </div>

          {/* Right Column */}
          <div className='text-white space-y-6'>
            <motion.p
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.75,
                delay: 0.75,
                ease: 'easeInOut',
              }}
              className='text-xl md:text-2xl italic font-light'
            >
              "The best way to predict the future is to create it."
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
