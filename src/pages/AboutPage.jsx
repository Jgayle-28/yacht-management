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
          <section className='flex flex-col items-center justify-center px-8 pt-32 space-y-6'>
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
              We have a vision at Ethos Yacht Management to approach every
              charter with the utmost attention and offer a true luxury charter
              experience. We cater to your wishes and endeavor to fulfill your
              dreams of an ideal holiday.
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
            With many years of experience in the luxury charter market, we have
            established ourselves in this realm and are known for our
            exceptional service and standards. We continue to expand with new
            and exciting yachts to provide a wide range that caters to various
            preferences.
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
            Our team of dedicated brokers is happy to help you plan the most
            memorable yacht holiday. Whether you’re interested in a luxury motor
            yacht cruising along the Amalfi Coast, a gorgeous catamaran
            exploring the Greek Islands, or sailing away in the tropical sun of
            the Caribbean, we can bring your charter dreams to life!
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
            We Charter the World!
            <br />
            We are also excited to introduce our retail luxury yacht charter
            brokerage. With 30 years of experience in the charter industry, we
            have taken our knowledge of yachts, charters, and travel to offer
            you an exceptional holiday experience anywhere you can dream of
            voyaging. Through our travels and worldwide contacts, we have sought
            out beautiful luxury yachts to showcase on our site.
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
            With style and elegance, these motor yachts, catamarans, sailing
            yachts, gulets, and motor sailers will provide the ideal escape to
            relax and rejuvenate. Along with incredible yachts, there are both
            unique and familiar locations to inspire your travel plans. Whether
            you yearn to relax in the sun while dipping your toes in the water
            or experience new sites and cultures on your holiday, we strive to
            create a tailor-made charter that suits you perfectly. Wherever your
            dreams take you… we can bring those dreams to life! We are
            passionate about yacht charters and travel—allow us to help you plan
            a holiday that you will cherish forever.
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
            We are excited to hear from you and to design the perfect luxury
            yacht holiday with memories to last a lifetime!
          </motion.p>

          {/* Team Section */}
          <section className='pt-12'>
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
          </section>
        </main>
      </div>
    </>
  )
}

export default AboutPage
