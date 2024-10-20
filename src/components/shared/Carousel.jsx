import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import useMeasure from 'react-use-measure'
import { useRouter } from '../../hooks/use-router'

const CARD_WIDTH = 350
const CARD_HEIGHT = 350
const MARGIN = 20
const CARD_SIZE = CARD_WIDTH + MARGIN

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
}

const Carousel = ({ items = [], showGradient = true }) => {
  const [ref, { width }] = useMeasure()
  const [offset, setOffset] = useState(0)

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1

  const CAN_SHIFT_LEFT = offset < 0

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER)

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return
    }
    setOffset((pv) => (pv += CARD_SIZE))
  }

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return
    }
    setOffset((pv) => (pv -= CARD_SIZE))
  }

  return (
    <section className='' ref={ref}>
      <div className='relative overflow-hidden p-4'>
        {/* CARDS */}
        <div className='mx-auto max-w-6xl'>
          <motion.div
            animate={{
              x: offset,
            }}
            className='flex'
          >
            {items.map((item) => {
              return (
                <Card key={item.id} showGradient={showGradient} {...item} />
              )
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? '0%' : '-100%',
            }}
            className='absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-700/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3'
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? '0%' : '100%',
            }}
            className='absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-700/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3'
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  )
}

const Card = ({ image, category, title, info, route, showGradient }) => {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        if (route) {
          router.push('/toys')
        }
      }}
      className='cursor-pointer relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl'
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className={`${
          showGradient
            ? 'bg-gradient-to-b from-slate-800/90 via-slate-800/60 to-black/0  hover:backdrop-blur-sm '
            : ''
        } absolute inset-0 z-20 rounded-2xl text-white transition-[backdrop-filter] p-6`}
      >
        <span className='text-xs font-semibold uppercase text-slate-300'>
          {category}
        </span>
        <h6 className='my-2 text-3xl font-bold'>{title}</h6>
        <p className=' mt-auto text-slate-300'>{info}</p>
      </div>
    </div>
  )
}

export default Carousel
