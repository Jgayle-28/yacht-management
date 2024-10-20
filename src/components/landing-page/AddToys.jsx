import { motion } from 'framer-motion'
import toysIcon from '../../assets/icons/toys.svg'
import Carousel from '../shared/Carousel'
import { toysLandingData } from '../../data/toys'
import ExpandButton from '../shared/ExpandButton'
import { useRouter } from '../../hooks/use-router'
import useSmoothScroll from '../../hooks/use-smooth-scroll'

const AddToys = () => {
  const router = useRouter()
  const scrollToSection = useSmoothScroll()

  const goToFoodPage = () => {
    scrollToSection(`top`, 0)
    setTimeout(router.push(`/toys`), 5000)
  }
  return (
    <section className='py-8 pt-24 md:pt-48 px-8 md:px-16' id='toys'>
      <div className='container mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          {/* Left Section (Image) */}
          <div className='order-2 lg:order-1'>
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
              className='text-4xl md:text-5xl font-normal md:font-light text-brandPrimary'
            >
              Add Toys
            </motion.h2>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: 120 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
              className='w-64 h-[2px] bg-brandPrimary my-4'
            />
            {/* Paragraph */}
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
              className='text-neutral-500 mb-3 text-neutral-500'
            >
              To enhance your onboard experience, we invite you to explore our
              exclusive collection of exciting toys, each designed to deliver
              endless entertainment for all ages. Whether you’re after
              effortless cruising or thrilling adventures, our selection has
              something for everyone. Choose from electric skateboards/ electric
              bikes for all-day gliding, Fliteboards for exhilarating water
              rides, high-performance Seabobs, or capture stunning aerial views
              with Mavic 2 Pro drones. For more water fun, we offer Stand-Up
              Paddle boards, water skis and Yamaha SeaWing sea scooters for a
              powerful underwater experience, while high-speed electric scooters
              are perfect for an adrenaline-packed adventure on or off the road.
            </motion.p>
          </div>
          {/* Right Section (Text + Images) */}
          <div className='order-1 lg:order-2 flex items-center justify-center flex-col mb-12 md:mb-0'>
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
              Time
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
              className='ml-20 text-center text-4xl md:text-5xl font-normal md:font-light text-brandPrimary'
            >
              For
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
              Water toys
            </motion.h6>
            <motion.img
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
              src={toysIcon}
              alt='Water Toys Splash'
              className='h-10  mt-4'
            />
          </div>
        </div>
      </div>
      <motion.div
        className='mt-24'
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
      >
        <Carousel items={toysLandingData} />
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
        <ExpandButton buttonText='View All Toys' onClick={goToFoodPage} />
      </motion.div>
    </section>
  )
}

export default AddToys
