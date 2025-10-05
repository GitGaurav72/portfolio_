import React from 'react'
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className='bg-white px-5 lg:px-28 py-6 mt-16'>
      <div className='max-w-6xl mx-auto flex flex-col items-center justify-center gap-2'>
        <img className='h-8 lg:h-10' src={logo} alt="Logo" />

        <div className='text-black lg:font-semibold lg:text-sm font-normal text-[12px] text-center'>
          <p>@ 2025 Personal Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
