import React from 'react'
import { motion } from 'framer-motion'
import Carousel from '../shared/Carousel'
import useWindowSize from '../../hooks/use-window-size'
import { useRouter } from '../../hooks/use-router'
import ExpandButton from '../shared/ExpandButton'

const ChooseAYacht = () => {
  const { width } = useWindowSize()
  const router = useRouter()

  return (
    <section className='pt-48 px-8 md:px-16' id='yachts'>
      <div className='container mx-auto max-w-6xl'>
        <div className='flex items-start justify-center md:justify-start md:ml-48 mb'>
          {width > 930 && (
            <div className='relative mt-6 mr-32'>
              <motion.span
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.55,
                  ease: 'easeInOut',
                }}
                whileInView={{
                  height: 96,
                  opacity: 1,
                }}
                className='absolute left-[1px] top-[1px] z-10 h-24 w-[2px] origin-top scale-0 bg-brandPrimary transition-all duration-500 scale-100'
              />
              <motion.span
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.55,
                  ease: 'easeInOut',
                }}
                whileInView={{
                  width: 96,
                  opacity: 1,
                }}
                className='absolute left-[1px] top-[1px] z-10 h-[2px] w-24 origin-right scale-0 bg-brandPrimary transition-all duration-500 scale-100'
              />
            </div>
          )}
          <div>
            {/* Top intro */}
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
              className='text-4xl md:text-5xl font-normal md:font-light text-center text-brandPrimary'
            >
              Your Adventure Awaits
            </motion.h2>
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
              className='text-center max-w-lg mx-auto mt-4 text-neutral-500'
            >
              We understand that one size doesn’t fit all...
            </motion.p>
            {width <= 930 && (
              <div className='relative mt-6 flex-justify-center mx-auto mb-16'>
                <motion.span
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.55,
                    ease: 'easeInOut',
                  }}
                  whileInView={{
                    height: 96,
                    opacity: 1,
                  }}
                  className='absolute left-[50%] top-[1px] z-10 h-24 w-[2px] origin-top scale-0 bg-brandPrimary transition-all duration-500 scale-100'
                />
              </div>
            )}
          </div>
        </div>

        {/* Carousel header */}
        <div className='mt-24 mb-12'>
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
            Select Your Yacht
          </motion.h2>
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
            className='w-64 h-[2px] bg-brandPrimary my-4'
          />
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
            className='text-neutral-500'
          >
            Start your enchanting journey by selecting the yacht that perfectly
            suits your needs.
          </motion.p>
        </div>
        <Carousel />
        <div className='flex justify-center mt-12'>
          <ExpandButton
            buttonText='View All Yachts'
            onClick={() => router.push(`/yachts`)}
          />
        </div>
      </div>
    </section>
  )
}

export default ChooseAYacht
