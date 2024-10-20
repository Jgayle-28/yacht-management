import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const SelectDropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const dropdownRef = useRef(null)

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    onChange(option)
    setIsOpen(false)
  }

  // Click away listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative' ref={dropdownRef}>
      <div
        className='flex items-center justify-between p-2 border rounded cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>
          {selectedOption ? selectedOption.tabName : 'Select an option'}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path
            fill='currentColor'
            d='M5.5 7l4.5 4.5L14.5 7l1.5 1.5-6 6-6-6z'
          />
        </svg>
      </div>
      {isOpen && (
        <motion.div
          className='absolute z-30 w-full mt-1 bg-white border rounded shadow-lg'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {options.map((option) => (
            <div
              key={option.id}
              className='p-2 hover:bg-gray-200 cursor-pointer'
              onClick={() => handleOptionClick(option)}
            >
              {option.tabName}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default SelectDropdown
