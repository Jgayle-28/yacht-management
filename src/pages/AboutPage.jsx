import React, { useState } from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/images/about-hero-.jpeg'
import pandelis from '../assets/images/pandelis.jpg'
import jordan from '../assets/images/jordan.jpg'

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
    { name: 'Pandelis', image: pandelis },
    { name: 'Jordan', image: jordan },
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
              It all starts with a solid team and a vision
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
            Ethos Yachting was founded on the principles of transparency, trust,
            and passion for the yachting world. As lifelong friends and business
            partners, <b>Jordan Arzoglou</b> and <b>Pandelis Dadadopoulos</b>{' '}
            bring over 20 years of combined experience in the industry, offering
            a fresh approach to yacht management that prioritizes honest,
            personal, and profitable service for owners.
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
            <b>Jordan Arzoglou</b>, at just 27, has already gained vast
            experience managing yachts and delivering unforgettable experiences
            for over 10,000 guests. His keen insight into what makes yacht
            operations successful means he’s focused on optimizing every aspect
            of yacht ownership—ensuring your asset is both well-maintained and
            profitable. For <b>Jordan</b>, it’s about elevating the standard of
            yacht management with innovative solutions, while always putting the
            owner’s needs first.
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
            <b>Pandelis Dadadopoulos</b>, a seasoned Captain with 18 years of
            experience, brings his deep love for the sea and a hands-on approach
            to every vessel he manages. His role goes far beyond navigation;
            <b> Pandelis</b> is deeply involved in ensuring smooth operations,
            from maintaining the highest standards of care for the yacht to
            ensuring exceptional crew management. His leadership on board
            reflects his commitment to delivering unmatched service for owners
            who want their yachts in expert hands.
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
            At Ethos Yachting, we offer a tailored, comprehensive approach to
            yacht management that’s focused on maximizing the potential of your
            investment. Whether it’s ensuring top-tier maintenance, managing
            charters to drive revenue, or curating a highly skilled crew, we
            take care of every detail—so you can enjoy the benefits of ownership
            without the stress.
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
            We are dedicated to running your yacht as efficiently and profitably
            as possible, with complete transparency and a personal touch. With
            us, your yacht isn’t just another asset—it’s managed with the care
            and attention it deserves.
          </motion.p>

          {/* OLD ABOUT TEXT ------------------------ */}
          {/* <motion.p
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
          </motion.p> */}

          {/* Team Section ---------------------------------------- */}
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
                  className='m-2  '
                  initial='hidden'
                  whileInView='visible'
                  custom={index}
                  variants={fadeIn}
                >
                  <div className='overflow-hidden rounded-lg shadow-lg'>
                    <img
                      src={image.image}
                      alt={`Gallery item ${index + 1}`}
                      className='w-[295px]  h-[430px] object-cover'
                    />
                  </div>
                  <h4 className='text-center mt-2 text-brandPrimary font-semibold text-2xl'>
                    {image.name}
                  </h4>
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
