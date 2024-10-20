import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const LandingHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={ref} className='relative w-full h-screen overflow-hidden px-10'>
      {window.innerWidth <= 768 ? (
        <div
          className='absolute inset-0 bg-cover bg-center h-full'
          style={{ backgroundImage: `url('/assets/img/hero-video.gif')` }}
        ></div>
      ) : (
        <video
          className='absolute inset-0 object-cover h-full w-full'
          autoPlay
          loop
          muted
        >
          <source src='/assets/video/hero-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}

      <div className='absolute inset-0 bg-gray-900 opacity-75'></div>

      <div className='container mx-auto h-full flex flex-col space-y-20 justify-center items-center relative z-10'>
        <motion.img
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeIn' }}
          src='/assets/img/logo-letter.svg'
          alt='elevate your business'
          className='h-10 md:h-16  mx-auto'
        />

        <div>
          {/* <h1 className='overflow-hidden mt-6 uppercase font-light  text-xl md:text-3xl tracking-wider text-white text-center'>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial='hidden'
              animate={mainControls}
              transition={{ duration: 0.4, delay: 0.45, ease: 'easeIn' }}
              className='tracking-wider'
            >
              Honest
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial='hidden'
              animate={mainControls}
              transition={{ duration: 0.4, delay: 0.65, ease: 'easeIn' }}
              className='mx-2 md:mx-3 tracking-wider'
            >
              Personal
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial='hidden'
              animate={mainControls}
              transition={{ duration: 0.4, delay: 0.85, ease: 'easeIn' }}
              className='tracking-wider'
            >
              Profitable
            </motion.span>
          </h1> */}
          {/* ------- */}
          {/* <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.4, delay: 0.45, ease: 'easeIn' }}
            className='tracking-wider mt-6 uppercase font-light  text-xl md:text-3xl tracking-wider text-white text-center'
          >
            Honest
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.4, delay: 0.65, ease: 'easeIn' }}
            className='tracking-wider mt-6 uppercase font-light  text-xl md:text-3xl tracking-wider text-white text-center'
          >
            Personal
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.4, delay: 0.85, ease: 'easeIn' }}
            className='tracking-wider mt-6 uppercase font-light  text-xl md:text-3xl tracking-wider text-white text-center'
          >
            Profitable
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.95, ease: 'easeIn' }}
            className='mt-3 uppercase font-light text-xl md:text-3xl tracking-wider text-white text-center'
          >
            Yacht Management
          </motion.p> */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2, // Adjust this value to stagger more or less
                },
              },
            }}
            className='flex items-center justify-center h-full'
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: 0.45, ease: 'easeIn' }}
              className='tracking-wider mt-6 uppercase font-light text-xl md:text-3xl text-white text-center'
            >
              Honest
            </motion.h3>

            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: 0.65, ease: 'easeIn' }}
              className='tracking-wider mt-6 uppercase font-light text-xl md:text-3xl text-white text-center mx-8'
            >
              Personal
            </motion.h3>

            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: 0.85, ease: 'easeIn' }}
              className='tracking-wider mt-6 uppercase font-light text-xl md:text-3xl text-white text-center'
            >
              Profitable
            </motion.h3>
          </motion.div>
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.95, ease: 'easeIn' }}
            className='mt-6 uppercase font-light text-2xl md:text-4xl tracking-wider text-white text-center'
          >
            Yacht Management
          </motion.h3>
        </div>

        {/* <div className='pt-2 flex flex-col md:flex-row mt-auto'>
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.6, ease: 'easeIn' }}
            onClick={() => scrollToSection('about', 2000)}
            className='border border-white hover:bg-white/85 text-white hover:text-neutral-900 text-xs py-3 px-6 rounded mr-4 mb-4 lg:mb-0 transition-colors ease-in-out duration-300 uppercase tracking-heading1 hover:scale-[.99] transform hover:shadow-xl'
          >
            Learn More
          </motion.a>
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.6, ease: 'easeIn' }}
            onClick={() => scrollToSection('services', 2000)}
            className='border border-white hover:bg-white/85 text-white hover:text-neutral-900 text-xs py-3 px-6 rounded mr-4 mb-4 lg:mb-0 transition-colors ease-in-out duration-300 uppercase tracking-heading1 hover:scale-[.99] transform hover:shadow-xl'
          >
            Our Services
          </motion.a>
        </div> */}
      </div>
    </div>
  )
}

export default LandingHero
