import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='w-full h-[30vh] flex flex-col items-center justify-center gap-16 bg-white pb-12'>
      <div className='flex flex-col items-center gap-8'>
        <Logo />

        <ul className='flex gap-8 font-quicksand text-xs font-bold'>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className='w-11/12 flex items-center justify-between pt-2 border-t-[0.2px] border-t-darkGray font-quicksand text-xs'>
        <span>2022 Relume. All right reserved.</span>

        <ul className='flex items-center gap-8 font-bold'>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies Settings</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer