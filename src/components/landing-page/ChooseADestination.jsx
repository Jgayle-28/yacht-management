import React from 'react'
import { motion } from 'framer-motion'
import Carousel from '../shared/Carousel'

const ChooseADestination = () => {
  return (
    <section className='pt-48 px-4 md:px-16'>
      <div className='container mx-auto max-w-6xl'>
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
            Select a Destination
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
            There is a very certain and yet indescribable, mystical draw that is
            almost tangible when you’re in Greece. The beauty of her islands is
            that every port, every shore, every town is unique, extraordinary
            and has its own distinctive colour, smell and feel. The warmth of
            the people, the hospitality, the way of life are all a part of that
            harmonious draw. The same applies to our sea. The colours of the
            Aegean water vary from region to region. You will observe elaborate
            blues and greens, in such varying degrees that it is quite simply
            breathtaking. The turquoise, the emerald, the aqua marine, the
            sapphire that blend into the white washed buildings on the shore,
            the fiery gold sunsets and burnt orange sunrises are striking images
            that embody the soul of Greece. We are sure that whichever group of
            islands you wish to immerse yourselves in, you will depart with
            endless, vivid memories for years to come.
          </motion.p>
        </div>
        <Carousel />
      </div>
    </section>
  )
}

export default ChooseADestination
