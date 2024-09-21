import React from 'react'

const TabButton = ({ btnText, isActive, onClick, icon, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-4 rounded-full 
        flex items-center gap-2 
        ${
          isActive
            ? 'bg-brandPrimary text-white'
            : 'bg-white text-brandPrimary/80'
        }
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        ${
          !isActive
            ? 'hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]'
            : ''
        }
        ${isActive ? 'hover:text-white' : 'hover:text-brandPrimary'}
    `}
      {...rest}
    >
      {icon}
      <span>{btnText}</span>
    </button>
  )
}

export default TabButton
