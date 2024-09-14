import React from 'react'
import { motion } from 'framer-motion'
import ExpandButton from '../components/shared/ExpandButton'
import heroImage from '../assets/images/destinations/destinations-header.jpg'

const DestinationsPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Top Div with Background Image */}
      <div
        className='relative bg-cover bg-center h-[500px] bg-blue-500'
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
            Greek Islands
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
            Unlimited treasures for you inner Nomad to discover
          </motion.p>
        </div>
      </div>

      <main className='flex-grow max-w-6xl mx-auto'>
        {/* Quote Section */}
        <section className='px-8 py-24 text-center text-brandPrimary'>
          <blockquote>
            <h5 className='text-2xl'>
              “A nomad i will remain for life, in love with distant and
              uncharted places.”
            </h5>
            <p className='text-gray-500 text-sm'>- Isabelle Eberhardt</p>
          </blockquote>
        </section>

        {/* Tabs Section */}
        <section className='p-4 bg-white shadow'>
          <div className='flex space-x-4 border-b'>
            <button className='py-2 px-4 font-semibold text-gray-700 border-b-2 border-blue-500'>
              Tab 1
            </button>
            <button className='py-2 px-4 text-gray-500'>Tab 2</button>
            <button className='py-2 px-4 text-gray-500'>Tab 3</button>
          </div>
        </section>

        {/* Cards Section */}
        <section className='py-8'>
          <div className='flex flex-col space-y-6'>
            {Array(3)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className='bg-white shadow-lg rounded-lg overflow-hidden w-full'
                >
                  <div className='flex'>
                    <img
                      src={`/path/to/image-${index + 1}.jpg`}
                      alt={`Card Image ${index + 1}`}
                      className='w-1/3 h-32 object-cover'
                    />
                    <div className='p-4 w-2/3'>
                      <h2 className='text-xl font-bold'>
                        Card Title {index + 1}
                      </h2>
                      <p className='text-gray-600 mb-2'>Card Tagline</p>
                      <p className='text-gray-800 mb-4'>
                        This is a brief description of the card content. It
                        provides additional details about the topic or content
                        covered in the card.
                      </p>
                      <ExpandButton buttonText='View Details' />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default DestinationsPage
