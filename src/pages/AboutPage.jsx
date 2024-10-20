import React, { useState } from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/images/about-hero-.jpeg'

const AboutPage = () => {
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

  const images = [
    // Add your image URLs here
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ]

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
              About
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
              Sailing Dreams into Reality: Your Journey Begins with Us.
            </motion.p>
          </div>
        </div>

        <main className='flex-grow max-w-7xl mx-auto px-8'>
          <section className='flex flex-col items-center justify-center px-8 pt-16 space-y-6'>
            <motion.h4
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: 'easeInOut',
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className='text-center text-brandPrimary mb-6 text-3xl font-semibold '
            >
              Why settle for less, when you can get so much more?
            </motion.h4>
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
              className='text-center text-neutral-500 mb-6'
            >
              At Ethos, we believe that owning a yacht should be an experience
              defined by enjoyment, ease, and financial success.
            </motion.p>
          </section>
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
            className='text-center text-neutral-500 mb-6'
          >
            With over fifteen years of experience in the yachting industry, we
            have become trusted experts, dedicated to helping yacht owners
            maximize the profitability of their investments while delivering a
            seamless, worry-free ownership journey.
          </motion.p>
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
            className='text-center text-neutral-500 mb-6'
          >
            Our approach is guided by three core values:{' '}
            <b>honesty, transparency, and ethics</b>. We understand the
            importance of trust when it comes to managing a valuable asset like
            a yacht, and we are committed to operating with complete integrity
            in everything we do.
          </motion.p>
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
            className='text-center text-neutral-500 mb-6'
          >
            Whether it’s through transparent financial reporting, ethical crew
            management, or navigating complex regulatory landscapes, you can
            trust that<b> Ethos has your best interests at heart</b>.
          </motion.p>
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
            className='text-center text-neutral-500 mb-6'
          >
            Our team’s passion for the sea, paired with our deep understanding
            of the yachting industry, drives us to go above and beyond for our
            clients. Your yacht is not just a vessel—it’s an investment, a
            lifestyle, and a source of pleasure. We’re here to protect that
            investment, enhance its value, and make sure your ownership
            experience is as enjoyable and rewarding as possible.
          </motion.p>
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
            className='text-center text-neutral-500 mb-6'
          >
            Let us guide you with expert management, honest communication, and a
            commitment to your success—because at Ethos, your peace of mind and
            profitability are always our top priorities.
          </motion.p>

          {/* Team Section */}
          {/* <section className='pt-12'>
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
              className='text-center text-4xl md:text-5xl font-normal md:font-light text-brandPrimary'
            >
              Our Team
            </motion.h2>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: 120 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
              className='w-64 h-[2px] bg-brandPrimary my-4 mx-auto'
            />
            <div className='flex flex-wrap justify-center mt-20 mb-32'>
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className='m-2 w-1/3 sm:w-1/2 lg:w-1/4'
                  initial='hidden'
                  whileInView='visible'
                  custom={index}
                  variants={fadeIn}
                >
                  <div className='overflow-hidden rounded-lg shadow-lg'>
                    <img
                      src={image}
                      alt={`Gallery item ${index + 1}`}
                      className='w-full h-auto'
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section> */}
        </main>
      </div>
    </>
  )
}

export default AboutPage
