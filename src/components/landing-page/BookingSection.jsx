import React from 'react'
import bookingImage from '../../assets/images/sections/booking-2.jpg'

const BookingSection = () => {
  return (
    <section
      className='relative flex items-center justify-center h-[600px] bg-cover bg-center text-white'
      style={{
        backgroundImage: `linear-gradient(rgba(28, 42, 72, .5), rgba(28, 42, 72, .5)), url(${bookingImage})`,
      }}
    >
      <div className='text-center'>
        <h2 className='text-4xl font-bold mb-4'>Luxurious Experiences,</h2>
        <h2 className='text-4xl font-bold mb-4 ml-12'>Enduring Memories,</h2>
        <h2 className='text-4xl font-bold mb-4 ml-20'>Affordable Prices...</h2>
        <p className='text-lg mb-6'>
          Choose a date, choose a yacht, and let us take care of the rest...
        </p>
        <button className='px-6 py-3 border border-white text-white font-semibold rounded transition duration-300 ease-in-out hover:bg-white hover:text-black'>
          Make a request now!
        </button>
      </div>
    </section>
  )
}

export default BookingSection
