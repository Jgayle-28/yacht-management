import { motion } from 'framer-motion'
import toysIcon from '../../assets/icons/toys.svg'

const AddToys = () => {
  return (
    <section className=' py-8 pt-48 px-8 md:px-16' id='toys'>
      <div className='container mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          {/* Left Section (Image) */}
          <div>
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
              className='text-4xl md:text-5xl font-normal md:font-light text-neutral-800'
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
              To elevate your onboard experience, we highly recommend choosing
              one or more of the exciting toys from our exclusive collection.
              They're guaranteed to provide endless fun for all! Our selection
              includes Bamboo GTX series electric skateboards for effortless
              cruising all day, Fliteboards, Seabobs F5 S, Mavic 2 Pro drones,
              Stand-Up Paddle boards, Yamaha SeaWing II sea scooters designed
              for power and performance, and Kaabo high-speed electric scooters
              built for the ultimate on or off-road adventure. These top-rated
              toys offer something for everyone!
            </motion.p>

            {/* Three Images Below Paragraph */}
            <div className='grid grid-cols-3 gap-4'>
              <img
                src='https://via.placeholder.com/150'
                alt='Image 1'
                className='w-full object-cover rounded-lg shadow-md'
              />
              <img
                src='https://via.placeholder.com/150'
                alt='Image 2'
                className='w-full object-cover rounded-lg shadow-md'
              />
              <img
                src='https://via.placeholder.com/150'
                alt='Image 3'
                className='w-full object-cover rounded-lg shadow-md'
              />
            </div>
          </div>
          {/* Right Section (Text + Images) */}
          <div className=' flex items-center justify-center flex-col'>
            {/* <img src={toysImage} alt='Water Toys Splash' className='h-24 ' /> */}
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
                className='absolute left-[50%] top-[1px] z-10 h-24 w-[2px] origin-top scale-0 bg-blue-950 transition-all duration-500 scale-100'
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
              Toys
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
              Water
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
              Splash
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
    </section>
  )
}

export default AddToys
