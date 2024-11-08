import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Carousel from '../shared/Carousel'
import Modal from '../shared/Modal'
import foodImage from '../../assets/images/food/steak-min.jpeg'
import yachtVideo from '../../assets/videos/yacht.mp4'
import foodIcon from '../../assets/icons/food.svg'
import { foodLandingData } from '../../data/food'
import ExpandButton from '../shared/ExpandButton'
import { useRouter } from '../../hooks/use-router'
import useSmoothScroll from '../../hooks/use-smooth-scroll'

const FoodSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollToSection = useSmoothScroll()
  const router = useRouter()

  const goToFoodPage = () => {
    scrollToSection(`top`, 0)
    setTimeout(router.push(`/food`), 5000)
  }

  return (
    <>
      <section className='pt-24 md:pt-48 px-4 md:px-16' id='food'>
        <div className=' flex items-center justify-center flex-col'>
          <div className='relative mt-6 flex-justify-center mx-auto mb-24'>
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
            It is more than just
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
            Food
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
            className='mr-12 mb-1 text-center text-4xl md:text-5xl font-normal md:font-light text-brandPrimary'
          >
            It's an Experience{' '}
          </motion.h6>
          <motion.img
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
            src={foodIcon}
            alt='Water Toys Splash'
            className='h-20  mt-4'
          />
          <div className='relative mt-6 flex-justify-center mx-auto mb-48'>
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
        </div>
        <div className='container mx-auto max-w-6xl'>
          {/* Image Section */}
          <motion.div
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
            className='mb-8 relative w-full h-[450px] bg-cover bg-center bg-no-repeat flex items-center justify-center'
            // onClick={() => setIsOpen(true)}
            style={{
              backgroundImage: `linear-gradient(rgba(23, 37, 84, .4), rgba(23, 37, 84, .4)), url(${foodImage})`,
            }}
          >
            {/* <PlayButton /> */}
          </motion.div>

          {/* Carousel Section */}
          <motion.div
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
            className='w-full'
          >
            <Carousel items={foodLandingData} showGradient={false} />
          </motion.div>
          <motion.div
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
            className='flex justify-center mt-12'
          >
            <ExpandButton buttonText='Find Out More' onClick={goToFoodPage} />
          </motion.div>
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
              className='text-3xl font-semibold text-center text-brandPrimary'
            >
              Discover Greece on Your Plate: Fresh Ingredients, Delicious
              Creations
            </motion.h2>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: 200 }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              className='w-64 h-[2px] origin-center bg-brandPrimary my-4'
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
              className='max-w-5xl pb-12 text-center text-neutral-500'
            >
              We are passionate about the exceptional quality of our locally
              sourced Greek ingredients. Every dish is lovingly crafted by our
              expert chefs, using the freshest produce to create delicious,
              unforgettable meals just for you. Paired with a curated selection
              of fine wines and beverages, each bite promises an incredible
              culinary experience, made with love and care.
            </motion.p>
          </div>
        </div>
      </section>
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

export default FoodSection
