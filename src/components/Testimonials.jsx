import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { TESTIMONIALS } from '../data/testimonials'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  const [selected, setSelected] = useState(0)

  return (
    <section
      ref={ref}
      className='py-24 pb-32 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden'
    >
      <motion.div className='p-4'>
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
          className='text-5xl font-semibold text-brandPrimary'
        >
          Don't just take our word for it.
        </motion.h3>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
          className='text-lg text-neutral-600 my-6 tracking-wide'
        >
          Here is what guests from all over the world have to say...
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeInOut' }}
          className='div'
        >
          <SelectBtns
            numTracks={TESTIMONIALS.length}
            setSelected={setSelected}
            selected={selected}
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: '100%' },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeInOut' }}
      >
        <Cards
          testimonials={TESTIMONIALS}
          setSelected={setSelected}
          selected={selected}
        />
      </motion.div>
    </section>
  )
}

const SelectBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className='flex gap-1 mt-8'>
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className='h-1.5 w-full bg-slate-300 relative'
          >
            {selected === n ? (
              <motion.span
                className='absolute top-0 left-0 bottom-0 bg-brandPrimary'
                initial={{
                  width: '0%',
                }}
                animate={{
                  width: '100%',
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1)
                }}
              />
            ) : (
              <span
                className='absolute top-0 left-0 bottom-0 bg-slate-950'
                style={{
                  width: selected > n ? '100%' : '0%',
                }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}

const Cards = ({ testimonials, selected, setSelected }) => {
  return (
    <div className='p-4 relative h-[450px] lg:h-[500px] shadow-xl'>
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        )
      })}
    </div>
  )
}

const Card = ({
  Icon,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected)
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3
  const background = position % 2 ? '#0f172a' : 'white'
  const color = position % 2 ? 'white' : 'black'

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: 'left bottom',
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: 'easeOut',
      }}
      onClick={() => setSelected(position)}
      className='absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between'
    >
      <p className='text-7xl mx-auto'></p>
      <p className='text-lg lg:text-xl font-light italic my-8'>
        "{description}"
      </p>
      <div>
        <span className='block font-semibold text-lg'>{name}</span>
        <span className='block text-sm'>{title}</span>
      </div>
    </motion.div>
  )
}

export default Testimonials
