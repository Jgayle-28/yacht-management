import React from 'react'
import AddToys from './landing-page/AddToys'
import ChooseADestination from './landing-page/ChooseADestination'
import FoodSection from './landing-page/FoodSection'
import { motion } from 'framer-motion'
import heroImage from '../assets/images/hero-image.jpeg'

const ExperienceOnBoard = () => {
  return (
    <section className='w-full pb-40'>
      <div
        className='relative bg-cover bg-center h-[500px]'
        style={{
          backgroundImage: `linear-gradient(rgba(23, 37, 84, .4), rgba(23, 37, 84, .4)),url(${heroImage})`,
        }}
      >
        <div className='flex flex-col items-center justify-center h-full text-center text-white w-full'>
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
            className='text-4xl font-light mb-2 w-full'
          >
            Experience On Board
          </motion.h1>
          <div className='w-full flex justify-center my-4'>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: 200 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
              className='w-64 h-[2px] origin-center bg-white'
            />
          </div>

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
              delay: 0.6,
              ease: 'easeInOut',
            }}
            className='text-lg tracking-wide'
          >
            Elevating Your Voyage to Perfection.
          </motion.p>
        </div>
      </div>
      <FoodSection />
      <AddToys />
      <ChooseADestination />
    </section>
  )
}

export default ExperienceOnBoard
