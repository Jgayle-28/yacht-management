import React from 'react'
import heroImage from '../../assets/images/hero-image.webp'

const Hero = () => {
  return (
    <div
      className='relative h-screen bg-cover bg-center w-full'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Navigation */}
      <nav className='absolute top-0 left-0 right-0 p-6 bg-transparent'>
        <div className='container mx-auto flex justify-between items-center'>
          <a href='/' className='text-white text-2xl font-bold'>
            Logo
          </a>
          <div>
            <a href='#about' className='text-white mx-4'>
              About
            </a>
            <a href='#services' className='text-white mx-4'>
              Services
            </a>
            <a href='#contact' className='text-white mx-4'>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className='container mx-auto h-full flex items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Left Column */}
          <div className='text-white space-y-4'>
            <h1 className='text-5xl md:text-6xl font-bold'>
              Welcome to Our Service
            </h1>
            <p className='text-lg md:text-xl'>
              We provide the best solutions to help your business grow. Join us
              and start your journey today.
            </p>
          </div>

          {/* Right Column */}
          <div className='text-white space-y-6'>
            <blockquote className='text-xl md:text-2xl italic'>
              "The best way to predict the future is to create it."
            </blockquote>
            <button className='px-6 py-3 border border-white text-white font-semibold rounded transition duration-300 ease-in-out hover:bg-white hover:text-black'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
