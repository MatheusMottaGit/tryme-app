import React from 'react'

import logo from '../assets/Column.svg'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className='w-full h-[10vh] flex items-center justify-between p-nav bg-transparent'>
      <Image 
        src={logo} 
        alt=''
        width={150}
      />

      <ul className='font-quicksand font-bold text-xs flex items-center gap-8'>
        <li>Home</li>
        <li>Product</li>
        <li>About</li>
        <li>Contact</li>

        <div className='border-2 border-solid border-darkGray flex justify-center gap-2 p-2 rounded-full w-24'>
          Cart
          <span className='text-orange'>
            0
          </span>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar