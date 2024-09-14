import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const ExpandButton = ({ buttonText = '', onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className='group flex h-10 items-center gap-2 rounded-full pl-3 pr-4 transition-all duration-300 ease-in-out bg-brandPrimary/25 hover:bg-brandPrimary hover:pl-2 hover:text-white active:bg-neutral-700'
    >
      <span className='rounded-full bg-brandPrimary p-1 text-sm transition-colors duration-300 group-hover:bg-white'>
        <FiArrowRight className='-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45' />
      </span>
      <span>{buttonText}</span>
    </button>
  )
}

export default ExpandButton
