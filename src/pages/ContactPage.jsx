import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import heroImage from '../assets/images/contact-img.jpeg'

const Form = ({ selected, setSelected }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm()

  const [successMessage, setSuccessMessage] = useState('')

  const onSubmit = async (data) => {
    const response = await fetch('https://formspree.io/f/xjkbqern', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setSuccessMessage(
        'Submitted successfully! A member of our team will be in touch with you shortly.'
      )
      reset()
    } else {
      setSuccessMessage(
        'There was an error submitting your request. Please try again.'
      )
    }
  }

  return (
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
            Contact Us
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
            Set Sail on a New Adventure
          </motion.p>
        </div>
      </div>

      <main className='w-full mx-auto px-8  relative'>
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
              className={`p-8 w-full text-white transition-colors duration-[750ms] ${
                selected === 'company' ? 'bg-indigo-600' : 'bg-white'
              }`}
            >
              <div className='mb-6'>
                <p className='text-2xl mb-2 text-slate-500'>
                  Hi! My name is...
                </p>
                <input
                  type='text'
                  placeholder='Your name...'
                  {...register('name', { required: 'Name is required' })}
                  className={`${
                    selected === 'company' ? 'bg-indigo-700' : 'bg-slate-100'
                  } transition-colors duration-[750ms] placeholder-slate/70 p-2 rounded-md w-full focus:outline-0 text-slate-900`}
                />
                {errors.name && (
                  <p className='text-red-500'>{errors.name.message}</p>
                )}
              </div>
              <div className='mb-6'>
                <p className='text-2xl mb-2 text-slate-500'>
                  You can reach me at...
                </p>
                <input
                  type='email'
                  placeholder='Your email...'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address.',
                    },
                  })}
                  className={`${
                    selected === 'company' ? 'bg-indigo-700' : 'bg-slate-100'
                  } transition-colors duration-[750ms] p-2 rounded-md w-full focus:outline-0 text-slate-900`}
                />
                {errors.email && (
                  <p className='text-red-500'>{errors.email.message}</p>
                )}
              </div>

              <AnimatePresence>
                {selected === 'company' && (
                  <motion.div
                    initial={{ marginTop: -104, opacity: 0 }}
                    animate={{ marginTop: 0, opacity: 1 }}
                    exit={{ marginTop: -104, opacity: 0 }}
                    className='mb-6'
                  >
                    <p className='text-2xl mb-2'>by the name of...</p>
                    <input
                      type='text'
                      placeholder='Your company name...'
                      {...register('companyName', {
                        required: 'Company name is required',
                      })}
                      className={`${
                        selected === 'company'
                          ? 'bg-indigo-700'
                          : 'bg-slate-100'
                      } transition-colors duration-[750ms] p-2 rounded-md w-full focus:outline-0 text-slate-900`}
                    />
                    {errors.companyName && (
                      <p className='text-red-500'>
                        {errors.companyName.message}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className='mb-6'>
                <p className='text-2xl mb-2 text-slate-500'>
                  I would like to ask about...
                </p>
                <textarea
                  placeholder='Yacht management, yacht charter, etc...'
                  {...register('message', { required: 'Message is required' })}
                  className={`${
                    selected === 'company' ? 'bg-indigo-700' : 'bg-slate-100'
                  } transition-colors duration-[750ms] min-h-[150px] resize-none p-2 rounded-md w-full focus:outline-0 text-slate-900`}
                />
                {errors.message && (
                  <p className='text-red-500'>{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type='submit'
                className={`${
                  selected === 'company'
                    ? 'bg-white text-indigo-600'
                    : 'bg-slate-950 text-slate-100'
                } transition-colors duration-[750ms] text-lg text-center w-full py-3 uppercase tracking-wider`}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default Form
