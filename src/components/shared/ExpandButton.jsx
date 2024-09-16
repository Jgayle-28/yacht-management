import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const ExpandButton = ({ buttonText = '', onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className='group flex h-10 items-center gap-2 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-slate-700 hover:pl-2 text-brandPrimary/75 hover:text-white active:bg-neutral-700 border-brandPrimary/50 border '
    >
      <span className='rounded-full bg-brandPrimary/50 p-1 text-sm transition-colors duration-300 group-hover:bg-white'>
        <FiArrowRight className='-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45' />
      </span>
      <span className='text-sm uppercase'>{buttonText}</span>
    </button>
  )
}

export default ExpandButton
