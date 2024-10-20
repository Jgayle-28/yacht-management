import React from 'react'
import { MaxWidthWrapper } from '../shared/MaxWidthWrapper'
import { SiInstagram, SiX, SiYoutube } from 'react-icons/si'
import { Logo } from '../shared/Logo'
// import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='relative overflow-hidden py-12 bg-slate-900'>
      <div className='px-4 md:px-8 flex justify-center'>
        <LogoColumn />
      </div>
    </footer>
  )
}

export default Footer

const LogoColumn = () => {
  return (
    <div className='flex flex-col items-center'>
      <Logo />
      <div className='flex flex-col items-center'>
        <span className='mt-3 inline-block text-xs text-zinc-400 '>
          In partnership with{' '}
          <a
            href='https://kottero.com/'
            target='_blank'
            className='text-white/75 hover:text-white underline ease duration-200'
          >
            KOTTERO
          </a>
        </span>
      </div>
      <span className='mt-3 inline-block text-xs text-zinc-400 '>
        © Ethos Yachting - All rights reserved.
      </span>
    </div>
  )
}
