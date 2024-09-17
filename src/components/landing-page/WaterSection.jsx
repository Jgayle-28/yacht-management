import React from 'react'
import { motion } from 'framer-motion'
import Carousel from '../shared/Carousel'
import beachIcon from '../../assets/icons/beach.svg'

const WaterSection = () => {
  return (
    <section className='container mx-auto py-8 px-4 max-w-6xl'>
      <div className=' flex items-center justify-center flex-col'>
        <div className='relative flex-justify-center mx-auto mb-32'>
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
            className='absolute left-[50%] top-[1px] z-10 h-24 w-[2px] origin-top scale-0 bg-brandPrimary transition-all duration-500 scale-100'
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
          Every beach
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
          is
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
          Yours
        </motion.h6>
        <motion.img
          initial={{
            y: 10,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: 'easeInOut',
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          src={beachIcon}
          alt='Water Toys Splash'
          className='h-40 mt-4 mb-16'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-24'>
        <div className='flex justify-center mb-8 md:mb-0'>
          <motion.img
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
            src='https://via.placeholder.com/400'
            alt='Section Image'
            className='w-full max-w-lg object-cover rounded-lg shadow-lg'
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
              delay: 0.5,
              ease: 'easeInOut',
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className='text-3xl md:text-4xl font-light text-brandPrimary'
          >
            Our Shade of Blue is Unique
          </motion.h2>
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
            className='w-64 h-[2px] bg-brandPrimary my-4'
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
            className='mb-4 text-lg text-neutral-500'
          >
            We already know you have impeccable taste. Whether you're looking
            for a peaceful escape, a secluded sanctuary, or a tranquil oasis,
            we’re confident that one of our charters will transport you to a
            state of pure bliss. If it's a vibrant, lively celebration you
            seek—filled with boundless energy and exuberant fun—you can trust
            that we’ll deliver an unforgettable experience.
          </motion.p>
          <motion.p
            initial={{
              y: 10,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.85,
              ease: 'easeInOut',
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className='mb-4 text-lg text-neutral-500'
          >
            At Ethos Yachting, we don’t just aim to please—we do it with flair,
            precision, and exceptional style. Whatever you desire, and however
            you envision it, we tailor our services to your preferences,
            offering as much or as little as you wish, all in a welcoming and
            warm environment. We follow your lead and turn your dreams into
            reality.
          </motion.p>
        </div>
      </div>
      <Carousel />
    </section>
  )
}

export default WaterSection
