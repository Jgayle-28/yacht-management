import React, { useState } from 'react'
import { FiMenu, FiArrowRight, FiX } from 'react-icons/fi'
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from 'framer-motion'
import useWindowSize from '../../hooks/use-window-size'

import { Logo } from '../shared/Logo'
import { useRouter } from '../../hooks/use-router'
import { LINKS } from '../../data/navigation'
import useSmoothScroll from '../../hooks/use-smooth-scroll'
import { useLocation } from 'react-router-dom'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()
  const { width } = useWindowSize()

  const scrollLength = width > 1024 ? 250 : 50

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > scrollLength ? true : false)
  })

  return (
    <motion.nav
      id='nav'
      initial={{
        y: -15,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.75,
        delay: 0.25,
        ease: 'easeInOut',
      }}
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? 'bg-zinc-900 py-3 shadow-xl'
          : 'bg-transparent py-6 shadow-none'
      }
      ${
        location.pathname === '/contact' ||
        location.pathname === '/make-request'
          ? 'bg-zinc-900 py-3 shadow-xl'
          : ''
      }
      `}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        {scrolled ? <Logo /> : <div />}

        <div className='hidden gap-6 lg:flex'>
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </motion.nav>
  )
}

const Links = () => {
  return (
    <div className='flex items-center gap-6'>
      {LINKS.map((l) => (
        <NavLink
          key={l.text}
          href={l.href}
          FlyoutContent={l.component}
          id={l.id}
        >
          {l.text}
        </NavLink>
      ))}
    </div>
  )
}

const NavLink = ({ children, FlyoutContent, id }) => {
  const [open, setOpen] = useState(false)
  const scrollToSection = useSmoothScroll()
  const location = useLocation()
  const router = useRouter()

  const showFlyout = FlyoutContent && open

  const handleLinkClick = (e) => {
    if (
      id === 'management' ||
      id === 'about' ||
      id === 'contact' ||
      id === 'experience' ||
      id === 'yachts'
    ) {
      scrollToSection(`top`, 0)
      setTimeout(() => router.push(`/${id}`), 100)
      return
    }
    if (location.pathname === '/') {
      return scrollToSection(id, 1000)
    }
    scrollToSection(`top`, 0)
    setTimeout(router.push(`/${id}`), 5000)
  }

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative h-fit w-fit'
    >
      <span
        onClick={handleLinkClick}
        className='relative uppercase text-xs tracking-widest group text-white/80 hover:text-white cursor-pointer'
      >
        {children}
        <span className='absolute -bottom-1 left-0 w-full h-[1px] bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100' />
      </span>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute left-1/2 top-12 bg-white text-black'
          >
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
            <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white' />
            {/* <FlyoutContent /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const CTAs = () => {
  const router = useRouter()
  return (
    <div className='flex items-center gap-3'>
      <button
        onClick={() => router.push('/make-request')}
        className='flex items-center gap-2 border border-white px-2 py-2 text-xs font-light text-white transition-colors hover:bg-white hover:text-black duration-500 ease'
      >
        <span className='uppercase'>Book Now</span>
      </button>
    </div>
  )
}

const MobileMenuLink = ({ children, setMenuOpen, id }) => {
  const scrollToSection = useSmoothScroll()
  const location = useLocation()
  const router = useRouter()

  const handleLinkClick = (e) => {
    if (
      id === 'management' ||
      id === 'about' ||
      id === 'contact' ||
      id === 'experience' ||
      id === 'yachts'
    ) {
      setMenuOpen(false)
      scrollToSection(`top`, 0)
      setTimeout(() => router.push(`/${id}`), 100)
      return
    }
    if (location.pathname === '/') {
      setMenuOpen(false)
      return scrollToSection(id, 1000)
    }
    setMenuOpen(false)
    scrollToSection(`top`, 0)
    setTimeout(router.push(`/${id}`), 5000)
  }

  return (
    <div className='relative text-neutral-950'>
      <a
        onClick={handleLinkClick}
        className='group flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold'
      >
        <span>{children}</span>
        <FiArrowRight className='mr-8 group-hover:mr-2 transition-all duration-200' />
      </a>
    </div>
  )
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='block lg:hidden'>
      <button onClick={() => setOpen(true)} className='block text-3xl'>
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className='fixed left-0 top-0 flex h-screen w-full flex-col bg-white'
          >
            <div className='flex items-center justify-between p-6'>
              <Logo color='black' />
              <button onClick={() => setOpen(false)}>
                <FiX className='text-3xl text-neutral-950' />
              </button>
            </div>
            <div className='h-screen overflow-y-scroll bg-neutral-100 p-6'>
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                  id={l.id}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className='flex justify-end bg-neutral-950 p-6'>
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navigation
