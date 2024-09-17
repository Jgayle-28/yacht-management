import React from 'react'
import { FaPlay } from 'react-icons/fa'

const PlayButton = () => {
  return (
    <div
      className='h-16 w-16 rounded-full border border-white flex items-center justify-center bg-gradient-to-r from-brandPrimaryLight/15 to-brandPrimaryDark
                 transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl'
    >
      <FaPlay className='text-xl text-white' />
    </div>
  )
}

export default PlayButton
