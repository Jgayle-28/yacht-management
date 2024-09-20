import React from 'react'
import ExpandButton from '../shared/ExpandButton'
import { useRouter } from '../../hooks/use-router'
import { motion } from 'framer-motion'

const ToysCard = ({ toy, index }) => {
  const { id, image, title, tagLine, description, price, toyData } = toy
  const router = useRouter()

  const handleViewDetails = () => {
    router.push(`/destinations/${title}/${id}`)
  }

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.75,
        delay: (index / index) * 0.1,
      }}
      className='bg-white shadow-lg rounded-lg overflow-hidden w-full'
    >
      <div className='flex flex-col md:flex-row'>
        <img
          src={image}
          alt={`Card Image ${id + 1}`}
          className='w-full md:w-1/3 object-cover'
        />
        <div className='p-4 w-full md:w-2/3'>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <p className='text-gray-800 my-2'>{tagLine}</p>
          <p className='text-gray-600 mb-4 text-sm tracking-wider leading-relaxed'>
            {description}
          </p>

          {/* Price */}
          <div className='pt-4'>
            <span className='text-2xl font-semibold text-brandPrimary'>
              ${price}
            </span>
            <span className='text-gray-500'>/day</span>
          </div>
          {/* <ExpandButton buttonText='View Details' onClick={handleViewDetails} /> */}
        </div>
      </div>
    </motion.div>
  )
}

export default ToysCard
