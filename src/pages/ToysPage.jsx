import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import heroImage from '../assets/images/toys/toys-hero.jpeg'
import videoPreview from '../assets/images/toys/toys-video-img.jpg'
import Modal from '../components/shared/Modal'
import yachtVideo from '../assets/videos/yacht.mp4'
import PlayButton from '../components/shared/PlayButton'
import foodIcon from '../assets/icons/food-page.svg'
import { foodPageData } from '../data/food'
import ToysCard from '../components/toys/ToysCard'
import { toysLandingData } from '../data/toys'

const ToysPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggering effect
        duration: 0.5,
      },
    }),
  }

  return (
    <>
      <div className='flex flex-col min-h-screen' id='destination-top'>
        {/* Top Div with Background Image */}
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
              Toys
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
              Play in Style
            </motion.p>
          </div>
        </div>

        <main className='flex-grow max-w-7xl mx-auto px-8'>
          {/* Quote Section */}
          <section className='px-8 py-24 text-center text-brandPrimary'>
            <blockquote>
              <motion.h5
                initial={{
                  y: 15,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                  ease: 'easeInOut',
                }}
                className='text-2xl'
              >
                “The sea cures all ailments of man.”
              </motion.h5>

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
                  duration: 0.5,
                  delay: 0.35,
                  ease: 'easeInOut',
                }}
                className='text-gray-500 text-sm'
              >
                — Pluto
              </motion.p>
            </blockquote>
          </section>

          {/* Video */}
          <section
            className='relative min-w- cursor-pointer h-[450px] bg-cover bg-center bg-no-repeat flex items-center justify-center'
            onClick={() => setIsOpen(true)}
            style={{
              backgroundImage: `linear-gradient(rgba(23, 37, 84, .4), rgba(23, 37, 84, .4)), url(${videoPreview})`,
            }}
          >
            <PlayButton />
          </section>

          {/* Cards Section */}
          <section className='flex flex-col items-center justify-center px-8 pt-32 space-y-6'>
            {/* <motion.img
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
                once: true,
                y: 0,
                opacity: 1,
              }}
              src={foodIcon}
              alt='Section Image'
              className='w-full h-32'
            /> */}

            <motion.p
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: 'easeInOut',
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className='text-center text-neutral-500 pt-12'
            >
              At Ethos Yachting, we believe that the fun doesn't stop at the
              shoreline. Our curated selection of water toys transforms your
              yacht experience into an adventure-filled getaway. From
              exhilarating jet skis and paddleboards to inflatable islands and
              snorkeling gear, we offer the finest in aquatic entertainment.
            </motion.p>

            <motion.p
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
              className='text-center text-neutral-500 pt-4'
            >
              Whether you're seeking adrenaline-pumping thrills or leisurely
              days on the water, our top-quality toys ensure that every moment
              on board is unforgettable. Dive into a world of excitement and
              make waves with our premium water toys!
            </motion.p>
          </section>

          <section className='py-8'>
            <div className='flex flex-col space-y-8'>
              <AnimatePresence>
                {toysLandingData.map((toy, index) => (
                  <ToysCard
                    key={`${toy.id}-${index + 1}`}
                    toy={toy}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          </section>
        </main>
      </div>{' '}
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

export default ToysPage
