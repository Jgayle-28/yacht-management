import React, { useState } from 'react'
import { motion } from 'framer-motion'
import compass from '../../assets/icons/compass.svg'
import Modal from '../shared/Modal'
import videoPreview from '../../assets/images/sections/video-preview.webp'
import yachtVideo from '../../assets/videos/yacht.mp4'
import PlayButton from '../shared/PlayButton'
// import { GiCompass } from 'react-icons/gi'
// import { PiCompassRoseLight } from 'react-icons/pi'

const IntroSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section className='flex flex-col items-center justify-center px-8 pt-48 space-y-6'>
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
          src={compass}
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
          Bring your dream experience to life with us
        </motion.h2>
        <motion.div
          initial={{ width: '0%' }}
          whileInView={{ width: 200 }}
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
            delay: 0.75,
            ease: 'easeInOut',
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          className='text-center max-w-lg pb-12 text-neutral-500'
        >
          Uncover how you can embark on the indulgent adventure you've always
          desired. If you seek unique experiences and the ultimate in luxury,
          you're in the right place. Even the most refined tastes will be
          captivated by the enchanting atmosphere, your private crew, and our
          exquisite luxury yachts...
        </motion.p>

        {/* Full-width Video Preview */}
      </section>
      <section
        className='w-full cursor-pointer'
        onClick={() => setIsOpen(true)}
      >
        <img
          src={videoPreview}
          alt='Section Image'
          className='w-full h-[450px] object-cover'
        />
        <PlayButton />
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

export default IntroSection
