import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import heroImage from '../assets/images/request-hero.jpeg'

const YachtBookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm()
  const [successMessage, setSuccessMessage] = useState('')

  const onSubmit = async (data) => {
    const response = await fetch('https://formspree.io/f/mdknrldn', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setSuccessMessage('Your booking request has been submitted successfully!')
      reset()
    } else {
      setSuccessMessage(
        'There was an error submitting your request. Please try again.'
      )
    }
  }

  return (
    <>
      <div className='flex flex-col min-h-screen' id='destination-top'>
        {/* Top Div with Background Image */}
        <div
          className='relative bg-cover bg-center h-[500px] z-0'
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
              Make a Request
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
              Your Dream Voyage Awaits
            </motion.p>
          </div>
        </div>

        <main className='w-full mx-auto px-8 bg-slate-50 relative'>
          <motion.div
            className='flex items-center justify-center -mt-16 z-10'
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: 'easeInOut',
            }}
          >
            <div className='max-w-2xl w-full p-6 bg-white rounded-sm shadow-lg'>
              {successMessage && (
                <p className='text-green-500 text-center mb-4'>
                  {successMessage}
                </p>
              )}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='grid grid-cols-1 md:grid-cols-2 gap-4'
              >
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    {...register('fullName', { required: true })}
                    className='bg-slate-100 mt-1 transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Email
                  </label>
                  <input
                    type='email'
                    {...register('email', { required: true })}
                    className='bg-slate-100 mt-1 transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Country
                  </label>
                  <input
                    type='text'
                    {...register('country', { required: true })}
                    className='bg-slate-100 mt-1 transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Number of Passengers
                  </label>
                  <input
                    type='number'
                    {...register('passengers', { required: true })}
                    className='bg-slate-100 mt-1 transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Telephone
                  </label>
                  <input
                    type='tel'
                    {...register('telephone', { required: true })}
                    className='bg-slate-100 mt-1 transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900'
                  />
                </div>

                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Yacht Type
                  </label>
                  <select
                    {...register('yachtType', { required: true })}
                    className='bg-slate-100 mt-1 transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900'
                  >
                    <option value='sailing catamaran'>Sailing Catamaran</option>
                    <option value='power catamaran'>Power Catamaran</option>
                    <option value='sailing yacht'>Sailing Yacht</option>
                    <option value='motor yacht'>Motor Yacht</option>
                    <option value='gulet'>Gulet</option>
                    <option value='super yacht'>Super Yacht</option>
                  </select>
                </div>
                <div className='mb-4 col-span-1 md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Select Days
                  </label>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <input
                      type='date'
                      {...register('startDate', { required: true })}
                      className='bg-slate-100 mt-1 transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900'
                    />
                    <input
                      type='date'
                      {...register('endDate', { required: true })}
                      className='bg-slate-100 mt-1 transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900'
                    />
                  </div>
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Destination
                  </label>
                  <select
                    {...register('destination', { required: true })}
                    className='bg-slate-100 mt-1 transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900'
                  >
                    <option value='Cyclades'>Cyclades</option>
                    <option value='Saronic Gulf'>Saronic Gulf</option>
                    <option value='Sporades'>Sporades</option>
                    <option value='Ionian'>Ionian</option>
                  </select>
                </div>
                <div className='mb-4 col-span-1 md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700'>
                    message
                  </label>
                  <textarea
                    {...register('message')}
                    className='bg-slate-100 mt-1 transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900'
                    rows='4'
                  />
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.99,
                  }}
                  type='submit'
                  disabled={isSubmitting}
                  className={`col-span-1 md:col-span-2 bg-slate-950 text-slate-100'
             transition-colors duration-[750ms] text-lg text-center w-full py-3 uppercase tracking-wider text-white`}
                  // className='col-span-1 md:col-span-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200'
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  )
}

export default YachtBookingForm
