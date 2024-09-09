import React from 'react'
import { MaxWidthWrapper } from '../shared/MaxWidthWrapper'
import { SiInstagram, SiX, SiYoutube } from 'react-icons/si'
import { Logo } from '../shared/Logo'
// import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='relative overflow-hidden py-12 bg-zinc-900'>
      <MaxWidthWrapper className='relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6'>
        <LogoColumn />
        <GenericColumn
          title='Product'
          links={[
            {
              title: 'Features',
              href: '/#features',
            },
            {
              title: 'Testimonials',
              href: '/#testimonials',
            },
            {
              title: 'Pricing',
              href: '/#pricing',
            },
          ]}
        />
        <GenericColumn
          title='Company'
          links={[
            {
              title: 'Careers',
              href: '/#',
            },
            {
              title: 'Team',
              href: '/#',
            },
            {
              title: 'Contact',
              href: '/#',
            },
          ]}
        />
        <GenericColumn
          title='Legal'
          links={[
            {
              title: 'Terms & Conditions',
              href: '/#',
            },
            {
              title: 'Privacy Policy',
              href: '/#',
            },
            {
              title: 'Refund Policy',
              href: '/#',
            },
          ]}
        />

        <GenericColumn
          title='Socials'
          links={[
            {
              title: 'Twitter',
              href: '/#',
              Icon: SiX,
            },
            {
              title: 'Instagram',
              href: '/#',
              Icon: SiInstagram,
            },
            {
              title: 'Youtube',
              href: '/#',
              Icon: SiYoutube,
            },
          ]}
        />
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer

const LogoColumn = () => {
  return (
    <div className='col-span-6 md:col-span-4'>
      <Logo />
      <span className='mt-3 inline-block text-xs text-zinc-400'>
        © Ethos Yachting - All rights reserved.
      </span>
    </div>
  )
}

const GenericColumn = ({ title, links }) => {
  return (
    <div className='col-span-6 space-y-2 text-sm md:col-span-2'>
      <span className='block text-zinc-50'>{title}</span>
      {links.map((l) => (
        <a
          key={l.title}
          href={l.href}
          className='flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline'
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </a>
      ))}
    </div>
  )
}
