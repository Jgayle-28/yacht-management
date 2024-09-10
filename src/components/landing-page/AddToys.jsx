import toysImage from '../../assets/images/sections/toys.svg'
import toysScuba from '../../assets/images/sections/toys-scuba.svg'
import { motion } from 'framer-motion'

const AddToys = () => {
  return (
    <section className=' py-8 pt-48'>
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
              className='text-3xl font-bold text-neutral-800'
            >
              Add Toys
            </motion.h2>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: 120 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
              className='w-64 h-[2px] bg-blue-950 my-4'
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
            <img src={toysImage} alt='Water Toys Splash' className='h-24 ' />
            <p className='my-4 text-2xl text-center font-bold text-brandPrimary'>
              Toys Water Splash
            </p>
            <img src={toysScuba} alt='Water Toys Splash' className='h-24 ' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddToys
