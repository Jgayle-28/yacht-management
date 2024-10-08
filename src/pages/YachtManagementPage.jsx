import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import heroImage from '../assets/images/yachts/management-hero-img.jpeg'
import TabButton from '../components/shared/TabButton'
import { managementTabs } from '../data/management'
import SelectDropdown from '../components/shared/SelectDropdown'
import ExperienceOnBoard from '../components/ExperienceOnBoard'
import LandingHero from '../components/LandingHero'

const YachtManagementPage = () => {
  const [currentTab, setCurrentTab] = useState(managementTabs[0])

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
        {/* <div
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
              Yacht Management
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
              Elevating Your Voyage to Perfection.
            </motion.p>
          </div>
        </div> */}
        <LandingHero />

        <main className='flex-grow max-w-7xl mx-auto px-8'>
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
            className='text-center text-neutral-500 mt-24'
          >
            At Ethos, we offer complete yacht management services tailored for
            yacht owners. Our expertise covers yachts of all sizes and types.
            Whether you’re looking for full oversight of your yacht’s daily
            operations or support with specific management tasks, we’re ready to
            assist. We believe that small details can make a big difference, and
            our attention to these details ensures the best care for your yacht.
          </motion.p>

          <div className='items-center justify-center mt-12 space-y-4 space-x-6 flex-wrap hidden md:flex'>
            {managementTabs.map((tab, i) => (
              <TabButton
                key={i}
                onClick={() => setCurrentTab(tab)}
                icon={tab.icon}
                btnText={tab.tabName}
                isActive={currentTab.tabName === tab.tabName}
              />
            ))}
          </div>
          <div className='block md:hidden mt-12'>
            <SelectDropdown options={managementTabs} onChange={setCurrentTab} />
          </div>
          <div className='my-24'>
            <AnimatePresence>
              <motion.div
                key={currentTab.tabName}
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={fadeIn}
                custom={0}
                className='mt-8'
              >
                <h2 className='text-3xl font-semibold text-brandPrimary pb-4'>
                  {currentTab.tabName}
                </h2>
                {/* {currentTab?.tabName === 'Experience On Board' ? (
                  <ExperienceOnBoard />
                ) : (
                  currentTab.info.map((info, i) => (
                    <motion.p
                      key={i}
                      variants={fadeIn}
                      custom={i}
                      className='text-lg text-neutral-500 mt-4'
                    >
                      {info}
                    </motion.p>
                  ))
                )} */}
                {currentTab?.tabName === 'Experience On Board' ? (
                  <ExperienceOnBoard />
                ) : (
                  currentTab.info.map((info, i) => (
                    <motion.div
                      key={i}
                      variants={fadeIn}
                      custom={i}
                      className='text-lg text-neutral-700/90 mt-4'
                      dangerouslySetInnerHTML={{ __html: info }}
                    />
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  )
}

export default YachtManagementPage
