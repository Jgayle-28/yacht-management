import { AnimatePresence, motion } from 'framer-motion'

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className='bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer'
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }} // Start below (y: 100) with 0 opacity
            animate={{ opacity: 1, y: 0 }} // Move up (y: 0) and become visible (opacity: 1)
            exit={{ opacity: 0, y: 100 }} // Slide down on exit
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className='bg-white rounded-md w-auto shadow-xl cursor-default relative overflow-hidden'
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
