import React, { useState } from 'react'
import compass from '../assets/images/sections/compass.svg'
import Modal from './shared/Modal'
import videoPreview from '../assets/images/sections/video-preview.webp'
import yachtVideo from '../assets/videos/yacht.mp4'

const IntroSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section className='flex flex-col items-center justify-center px-4 pt-48 space-y-6'>
        {/* Image */}
        <img src={compass} alt='Section Image' className='w-full h-24' />

        {/* Tagline */}
        <h2 className='text-2xl font-bold text-center'>
          Bring your dream experience to life with us
        </h2>

        {/* Centered Line */}
        <div className='w-64 h-[2px] bg-cyan-900'></div>

        {/* Paragraph */}
        <p className='text-center max-w-lg pb-12'>
          Uncover how you can embark on the indulgent adventure you've always
          desired. If you seek unique experiences and the ultimate in luxury,
          you're in the right place. Even the most refined tastes will be
          captivated by the enchanting atmosphere, your private crew, and our
          exquisite luxury yachts...
        </p>

        {/* Full-width Video Preview */}
      </section>
      <section
        className='w-full cursor-pointer'
        onClick={() => setIsOpen(true)}
      >
        <img
          src={videoPreview}
          alt='Section Image'
          className='w-full h-[450px]'
        />
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
