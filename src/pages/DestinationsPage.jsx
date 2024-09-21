import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import heroImage from '../assets/images/destinations/destinations-hero.jpeg'
import {
  destinationTabs,
  cycladesTabData,
  saronicGulfTabData,
  sporadesTabData,
  ionianTabData,
} from '../data/destinations'
import Tabs from '../components/shared/Tabs'
import DestinationCard from '../components/destinations/DestinationCard'
import useSmoothScroll from '../hooks/use-smooth-scroll'

const DestinationsPage = () => {
  const [selectedTab, setSelectedTab] = useState(destinationTabs[0])
  const [currentTabData, setCurrentTabData] = useState(cycladesTabData)
  const scrollToSection = useSmoothScroll()

  const handleTabChange = (tab) => {
    setSelectedTab(tab)

    switch (tab) {
      case 'Cyclades':
        setCurrentTabData(cycladesTabData)
        break
      case 'Saronic Gulf':
        setCurrentTabData(saronicGulfTabData)
        break
      case 'Sporades':
        setCurrentTabData(sporadesTabData)
        break
      case 'Ionian':
        setCurrentTabData(ionianTabData)
        break
      default:
        setCurrentTabData(cycladesTabData)
        break
    }
    // Scroll to top of the page
    scrollToSection(`destination-top`, 1000)
  }
  return (
    <div className='flex flex-col min-h-screen' id='destination-top'>
      {/* Top Div with Background Image */}
      <div
        className='relative bg-cover bg-center h-[500px] bg-blue-500'
        style={{
          backgroundImage: `linear-gradient(rgba(23, 37, 84, .45), rgba(23, 37, 84, .45)),url(${heroImage})`,
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
            Greek Islands
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
            Unlimited treasures for you inner Nomad to discover
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
              “A nomad i will remain for life, in love with distant and
              uncharted places.”
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
              - Isabelle Eberhardt
            </motion.p>
          </blockquote>
        </section>

        {/* Tabs Section */}
        <section className='p-4 bg-white shadow'>
          <Tabs
            tabs={destinationTabs}
            selectedTab={selectedTab}
            setSelectedTab={handleTabChange}
          />
        </section>

        {/* Cards Section */}
        <section className='py-8'>
          <div className='flex flex-col space-y-8'>
            <AnimatePresence>
              {currentTabData.map((destination, index) => (
                <DestinationCard
                  key={`${destination.id}-${selectedTab}`}
                  destination={destination}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DestinationsPage
