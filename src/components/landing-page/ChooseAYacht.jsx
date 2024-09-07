import React from 'react'
import journeyDots from '../../assets/images/sections/journey-dots.svg'
import Carousel from '../shared/Carousel'

const ChooseAYacht = () => {
  return (
    <section className='pt-48 px-4 md:px-16'>
      <div className='container mx-auto max-w-6xl'>
        {/* Dots intro */}
        <div className='flex items-start ml-48'>
          <img src={journeyDots} alt='dots to journey' className='mt-3 mr-5' />
          <div>
            <h2 className='text-3xl font-bold text-center'>
              Your Adventure Awaits
            </h2>
            <p className='text-center max-w-lg mx-auto mt-4'>
              We understand that one size doesn’t fit all...
            </p>
          </div>
        </div>

        {/* Carousel header */}
        <div className='mt-24 mb-12'>
          <h2 className='text-3xl font-bold'>Select Your Yacht</h2>
          <div className='w-32 h-[2px] bg-brandPrimary my-3'></div>
          <p>
            Start your enchanting journey by selecting the yacht that perfectly
            suits your needs.
          </p>
        </div>
        <Carousel />
        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
          <div className='bg-white shadow-md rounded-lg p-6'>
            <img
              src='https://source.unsplash.com/featured/?yacht'
              alt='Yacht'
              className='w-full h-48 object-cover rounded-md'
            />
            <h3 className='text-xl font-bold mt-4'>Luxury Yacht</h3>
            <p className='text-gray-600 mt-2'>
              Experience the ultimate in luxury and comfort on a private yacht.
              Our luxury yachts are perfect for a romantic getaway or a family
              vacation.
            </p>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700'>
              Learn More
            </button>
          </div>

          <div className='bg-white shadow-md rounded-lg p-6'>
            <img
              src='https://source.unsplash.com/featured/?sailboat'
              alt='Sailboat'
              className='w-full h-48 object-cover rounded-md'
            />
            <h3 className='text-xl font-bold mt-4'>Sailboat</h3>
            <p className='text-gray-600 mt-2'>
              Set sail on a classic sailboat and experience the thrill of the
              open sea. Our sailboats are perfect for adventure seekers and
              sailing enthusiasts.
            </p>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700'>
              Learn More
            </button>
          </div>
          <div className='bg-white shadow-md rounded-lg p-6'>
            <img
              src='https://source.unsplash.com/featured/?catamaran'
              alt='Catamaran'
              className='w-full h-48 object-cover rounded-md'
            />
            <h3 className='text-xl font-bold mt-4'>Catamaran</h3>
            <p className='text-gray-600 mt-2'>
              Cruise the crystal-clear waters on a spacious catamaran. Our
              catamarans are perfect for large groups and family vacations.
            </p>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700'>
              Learn More
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default ChooseAYacht
