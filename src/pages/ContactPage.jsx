import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import heroImage from '../assets/images/contact-img.jpeg'

const ShiftingContactForm = () => {
  const [selected, setSelected] = useState('individual')

  return (
    <section className='p-4 min-h-screen flex justify-center items-center bg-slate-50'>
      <div className='w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden'>
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  )
}

const Form = ({ selected, setSelected }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form Data:', data)
    // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })

    // if (response.ok) {
    //   setSuccessMessage('Your booking request has been submitted successfully!')
    // } else {
    //   setSuccessMessage(
    //     'There was an error submitting your request. Please try again.'
    //   )
    // }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === 'company' ? 'bg-indigo-600' : 'bg-white'
      }`}
    >
      <div className='mb-6'>
        <p className='text-2xl mb-2 text-slate-500'>Hi 👋! My name is...</p>
        <input
          type='text'
          placeholder='Your name...'
          {...register('name', { required: 'Name is required' })}
          className={`${
            selected === 'company' ? 'bg-indigo-700' : 'bg-slate-100'
          } transition-colors duration-[750ms] placeholder-slate/70 p-2 rounded-md w-full focus:outline-0 text-slate-900`}
        />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
      </div>
      <div className='mb-6'>
        <p className='text-2xl mb-2 text-slate-500'>You can reach me at...</p>
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
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
      </div>

      <AnimatePresence>
        {selected === 'company' && (
          <motion.div
            initial={{ marginTop: -104, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            exit={{ marginTop: -104, opacity: 0 }}
            transition={BASE_TRANSITION}
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
                selected === 'company' ? 'bg-indigo-700' : 'bg-slate-100'
              } transition-colors duration-[750ms] p-2 rounded-md w-full focus:outline-0 text-slate-900`}
            />
            {errors.companyName && (
              <p className='text-red-500'>{errors.companyName.message}</p>
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
  )
}

const Images = ({ selected }) => {
  return (
    <div className='bg-white relative overflow-hidden w-full min-h-[100px]'>
      <motion.div
        initial={false}
        animate={{ x: selected === 'individual' ? '0%' : '100%' }}
        transition={BASE_TRANSITION}
        className='absolute inset-0 bg-slate-200'
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <motion.div
        initial={false}
        animate={{ x: selected === 'company' ? '0%' : '-100%' }}
        transition={BASE_TRANSITION}
        className='absolute inset-0 bg-slate-200'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </div>
  )
}

export default ShiftingContactForm

const BASE_TRANSITION = { ease: 'anticipate', duration: 0.75 }

// import { useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
// import heroImage from '../assets/images/contact-img.jpeg'

// const ShiftingContactForm = () => {
//   const [selected, setSelected] = useState('individual')
//   return (
//     <section className='p-4 min-h-screen flex justify-center items-center bg-slate-50'>
//       <div className='w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden'>
//         <Form selected={selected} setSelected={setSelected} />
//         <Images selected={selected} />
//       </div>
//     </section>
//   )
// }

// const Form = ({ selected, setSelected }) => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [emailError, setEmailError] = useState('')

//   const validateEmail = (email) => {
//     // Simple email regex for validation
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     return regex.test(email)
//   }

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value)
//     if (validateEmail(e.target.value)) {
//       setEmailError('')
//     } else {
//       setEmailError('Please enter a valid email address.')
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (validateEmail(email)) {
//       // Submit the form or handle the valid email
//       console.log('Email is valid:', email)
//     } else {
//       setEmailError('Please enter a valid email address.')
//     }
//   }
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className={`p-8 w-full text-white transition-colors duration-[750ms] ${
//         selected === 'company' ? 'bg-indigo-600' : 'bg-white'
//       }`}
//     >
//       {/* <h3 className='text-4xl font-bold mb-6'>Contact us</h3> */}

//       {/* Name input */}
//       <div className='mb-6'>
//         <p className='text-2xl mb-2 text-slate-500'>Hi 👋! My name is...</p>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type='text'
//           placeholder='Your name...'
//           className={`${
//             selected === 'company' ? 'bg-indigo-700' : 'bg-slate-100'
//           } transition-colors duration-[750ms] placeholder-slate/70 p-2 rounded-md w-full focus:outline-0 text-slate-900 `}
//         />
//       </div>
//       <div className='mb-6'>
//         <p className='text-2xl mb-2 text-slate-500'>You can reacht me at...</p>
//         <input
//           type='email'
//           placeholder='Your email...'
//           className={`${
//             selected === 'company' ? 'bg-indigo-700' : 'bg-slate-100'
//           } transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900`}
//           value={email}
//           onChange={handleEmailChange}
//         />
//         {emailError && <p className='text-red-500'>{emailError}</p>}
//       </div>

//       {/* Company/individual toggle */}
//       {/* <div className='mb-6'>
//         <p className='text-2xl mb-2'>and I represent...</p>
//         <FormSelect selected={selected} setSelected={setSelected} />
//       </div> */}

//       {/* Company name */}
//       <AnimatePresence>
//         {selected === 'company' && (
//           <motion.div
//             initial={{
//               // 104 === height of element + margin
//               // Alternatively can use mode='popLayout' on AnimatePresence
//               // and add the "layout" prop to relevant elements to reduce
//               // distortion
//               marginTop: -104,
//               opacity: 0,
//             }}
//             animate={{
//               marginTop: 0,
//               opacity: 1,
//             }}
//             exit={{
//               marginTop: -104,
//               opacity: 0,
//             }}
//             transition={BASE_TRANSITION}
//             className='mb-6'
//           >
//             <p className='text-2xl mb-2'>by the name of...</p>
//             <input
//               type='email'
//               placeholder='Your company name...'
//               className={`${
//                 selected === 'company' ? 'bg-indigo-700' : 'bg-slate-100'
//               } transition-colors duration-[750ms]  p-2 rounded-md w-full focus:outline-0 text-slate-900`}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Info */}
//       <div className='mb-6'>
//         <p className='text-2xl mb-2 text-slate-500'>
//           I would like to ask about...
//         </p>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder='Yacht management, yacht charter, etc...'
//           className={`${
//             selected === 'company' ? 'bg-indigo-700' : 'bg-slate-100'
//           } transition-colors duration-[750ms] min-h-[150px] resize-none p-2 rounded-md w-full focus:outline-0 text-slate-900`}
//         />
//       </div>

//       {/* Submit */}
//       <motion.button
//         whileHover={{
//           scale: 1.01,
//         }}
//         whileTap={{
//           scale: 0.99,
//         }}
//         type='submit'
//         className={`${
//           selected === 'company'
//             ? 'bg-white text-indigo-600'
//             : 'bg-slate-950 text-slate-100'
//         } transition-colors duration-[750ms] text-lg text-center w-full py-3 uppercase tracking-wider`}
//       >
//         Submit
//       </motion.button>
//     </form>
//   )
// }

// const FormSelect = ({ selected, setSelected }) => {
//   return (
//     <div className='border-[1px] rounded border-white overflow-hidden font-medium w-fit'>
//       <button
//         className={`${
//           selected === 'individual' ? 'text-violet-600' : 'text-white'
//         } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
//         onClick={() => setSelected('individual')}
//       >
//         <span className='relative z-10'>An individual</span>
//         {selected === 'individual' && (
//           <motion.div
//             transition={BASE_TRANSITION}
//             layoutId='form-tab'
//             className='absolute inset-0 bg-white z-0'
//           />
//         )}
//       </button>
//       <button
//         className={`${
//           selected === 'company' ? 'text-indigo-600' : 'text-white'
//         } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
//         onClick={() => setSelected('company')}
//       >
//         <span className='relative z-10'>A company</span>
//         {selected === 'company' && (
//           <motion.div
//             transition={BASE_TRANSITION}
//             layoutId='form-tab'
//             className='absolute inset-0 bg-white z-0'
//           />
//         )}
//       </button>
//     </div>
//   )
// }

// const Images = ({ selected }) => {
//   return (
//     <div className='bg-white relative overflow-hidden w-full min-h-[100px]'>
//       <motion.div
//         initial={false}
//         animate={{
//           x: selected === 'individual' ? '0%' : '100%',
//         }}
//         transition={BASE_TRANSITION}
//         className='absolute inset-0 bg-slate-200'
//         style={{
//           backgroundImage: `url(${heroImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
//       <motion.div
//         initial={false}
//         animate={{
//           x: selected === 'company' ? '0%' : '-100%',
//         }}
//         transition={BASE_TRANSITION}
//         className='absolute inset-0 bg-slate-200'
//         style={{
//           backgroundImage:
//             'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
//     </div>
//   )
// }

// export default ShiftingContactForm

// const BASE_TRANSITION = { ease: 'anticipate', duration: 0.75 }
