import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import heroImage from '../assets/images/destinations/destinations-header.jpg'
import Tabs from '../components/shared/Tabs'
import useSmoothScroll from '../hooks/use-smooth-scroll'
import YachtsCard from '../components/yachts/YachtsCard'
import { catamaranTabData, motorBoatTabData, yachtTabs } from '../data/yachts'
import { YachtDetailModal } from '../components/yachts/YachtDetailModal'

const YachtsPage = () => {
  const [selectedTab, setSelectedTab] = useState(yachtTabs[0])
  const [currentTabData, setCurrentTabData] = useState(catamaranTabData)
  const [modalOpen, setModalOpen] = useState(false)
  const scrollToSection = useSmoothScroll()

  const handleTabChange = (tab) => {
    setSelectedTab(tab)

    switch (tab) {
      case 'Catamaran':
        setCurrentTabData(catamaranTabData)
        break
      case 'Motor Boat':
        setCurrentTabData(motorBoatTabData)
        break
      default:
        setCurrentTabData(catamaranTabData)
        break
    }
    // Scroll to top of the page
    scrollToSection(`yacht-top`, 1000)
  }
  return (
    <>
      <div className='flex flex-col min-h-screen' id='yacht-top'>
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
              Our Fleet
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
              Ethos Luxury Yacths
            </motion.p>
          </div>
        </div>

        <main className='flex-grow max-w-7xl mx-auto px-8'>
          {/* Quote Section */}
          <section className='px-8 py-12 text-center text-brandPrimary'>
            {/* <blockquote>
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
                “What you seek is seeking you.”
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
                - Rumi
              </motion.p>
            </blockquote> */}
          </section>

          {/* Tabs Section */}
          <section className='p-4 bg-white shadow'>
            <Tabs
              tabs={yachtTabs}
              selectedTab={selectedTab}
              setSelectedTab={handleTabChange}
            />
          </section>

          {/* Cards Section */}
          <section className='py-8'>
            <div className='flex flex-col space-y-8'>
              <AnimatePresence>
                {currentTabData.map((boat, index) => (
                  <YachtsCard
                    key={`${boat.id}-${selectedTab}`}
                    boat={boat}
                    onClick={() => setModalOpen((prevState) => !prevState)}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          </section>
        </main>
      </div>
      {/* <YachtDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} /> */}
    </>
  )
}

export default YachtsPage
