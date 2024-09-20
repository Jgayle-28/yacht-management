import React, { useState } from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/images/food/food-hero.jpeg'
import videoPreview from '../assets/images/food/food-video-img.jpeg'
import Modal from '../components/shared/Modal'
import yachtVideo from '../assets/videos/yacht.mp4'
import PlayButton from '../components/shared/PlayButton'
import foodIcon from '../assets/icons/food-page.svg'
import { foodPageData } from '../data/food'

const FoodPage = () => {
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
              Food
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
              Exquisite Culinary Journeys Aboard Our Luxury Yachts.
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
                "Good food is the foundation of genuine happiness."
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
                — Auguste Escoffier
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
            <motion.img
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
            />

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
              className='text-3xl md:text-5xl font-light text-center text-brandPrimary'
            >
              Food
            </motion.h2>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: 70 }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              className='w-64 h-[2px] origin-center bg-brandPrimary'
            />
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
              className='text-center text-neutral-500'
            >
              For the ultimate taste of summer, you’ve chosen the perfect
              destination and the ideal yacht—what’s next? Ah, yes! Let’s dive
              into the culinary delights awaiting you. At Nomad Yachting, we
              understand that enjoying exceptional food on board is paramount.
              Not just any food, but appetizing, delicious, mouth-watering
              creations that will elevate your experience.
            </motion.p>
            <motion.p
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
              className='text-center text-neutral-500'
            >
              Rest assured, we cater to your every preference. On our daily
              charters, you’ll be treated to a sumptuous platter accompanied by
              ice-cold soft drinks and a chilled, fragrant bottle of Rosé. Our
              chefs meticulously prepare a delightful selection of cheeses, cold
              cuts, and a refreshing fruit platter just for you.
            </motion.p>
            <motion.p
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.35,
                ease: 'easeInOut',
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className='text-center text-neutral-500'
            >
              On our crewed charters, our professionally trained chefs will be
              ready to tempt your palate with an array of delectable treats
              throughout your journey. Whether you crave Greek, Mediterranean,
              Middle Eastern, or international flavors, or even a classic Surf &
              Turf, a culinary adventure awaits you!
            </motion.p>
            <motion.p
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
              className='text-center text-neutral-500'
            >
              We accommodate all dietary requirements and ensure we’re fully
              informed about any food intolerances, allergies, or meal
              preferences before your arrival. If you’re celebrating a special
              occasion on board, we’ll make it truly memorable.
            </motion.p>
            <motion.p
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.55,
                ease: 'easeInOut',
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className='text-center text-neutral-500'
            >
              In Greece, we have a passion for food, cooking with love and
              savoring every bite. We use only fresh, high-quality
              ingredients—if it’s not up to our standards, we won’t cook, serve,
              or eat it! Whether you’re enjoying a beach cookout or grilling the
              day’s catch on the BBQ, every dish is crafted with zesty lemons
              and aromatic herbs. Expect succulent meats, fresh and flavorful
              salads, creamy risotto, and comforting pasticcio. And let’s not
              forget the firm and juicy fruits!
            </motion.p>
            <motion.p
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.65,
                ease: 'easeInOut',
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className='text-center text-neutral-500'
            >
              When it comes to desserts, whether you prefer sweet and syrupy or
              sharp and tangy, our chef will leave you craving just one more
              spoonful. To complement each enticing meal, a full range of
              alcoholic and non-alcoholic beverages awaits—fruity cocktails,
              crisp white wines, or rich, heady reds. The choice is yours.
            </motion.p>
            <motion.p
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.65,
                ease: 'easeInOut',
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className='text-center text-neutral-500'
            >
              We can’t wait to welcome you aboard one of our charters soon!
            </motion.p>
          </section>

          {/* Image gallery */}
          <section className=''>
            {/* <motion.h2
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
              Our Gallery
            </motion.h2>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: 120 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
              className='w-64 h-[2px] bg-brandPrimary my-4'
            /> */}
            <div className='flex flex-wrap justify-center my-32'>
              {foodPageData.map((image, index) => (
                <motion.div
                  key={index}
                  className='m-2 w-1/3 sm:w-1/2 lg:w-1/4'
                  initial='hidden'
                  whileInView='visible'
                  custom={index}
                  variants={fadeIn}
                >
                  <div className='overflow-hidden rounded-lg shadow-lg h-64'>
                    <img
                      src={image.src}
                      alt={`Gallery item ${index + 1}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </motion.div>
              ))}
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

export default FoodPage
