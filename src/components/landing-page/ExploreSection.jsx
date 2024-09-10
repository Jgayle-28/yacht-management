import React from 'react'
import { motion } from 'framer-motion'
import exploreImage from '../../assets/images/sections/explore.webp'

const ExploreSection = () => {
  return (
    <>
      <section className='pt-48 px-4 md:px-16'>
        <div className='container mx-auto max-w-6xl'>
          {/* Image Section */}
          <div className='w-full mb-8'>
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
              src={exploreImage}
              alt='Food Image'
              className='w-full h-[550px] object-cover rounded-sm shadow-lg'
            />
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
              className='text-2xl font-bold text-neutral-800'
            >
              Discover Ancient Greece
            </motion.h2>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: 200 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.3 }}
              className='w-64 h-[2px] origin-center bg-blue-950 my-4'
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
              className='max-w-5xl pb-12 text-center text-neutral-500'
            >
              Greece—the land of mythical gods and the cradle of Western
              civilization. It is the birthplace of democracy, the Olympic
              Games, and numerous scientific and mathematical breakthroughs,
              from the railway and showers to central heating, alarm clocks, and
              the fire hose, to name just a few!
            </motion.p>
            <motion.p
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.6,
                ease: 'easeInOut',
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className='max-w-5xl pb-12 text-center text-neutral-500'
            >
              Known as Hellas, Greece boasts a rich history and tradition, while
              also offering beautiful beaches, a vibrant modern culture, and
              thrilling nightlife. It’s a country that masterfully blends the
              intricate and the simple.
            </motion.p>
            <motion.p
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.65,
                ease: 'easeInOut',
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className='max-w-5xl pb-12 text-center text-neutral-500'
            >
              Beyond the mainland, Greece’s islands are divided into seven main
              groups based on their geographical location: the Ionian Islands
              (Eptanisa), Cyclades, Dodecanese, Northern Aegean, Sporades,
              Saronic Gulf, and Crete and Evia, which stand alone. Below is a
              glimpse of the wonders awaiting you in this captivating and
              magnificent country.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExploreSection
