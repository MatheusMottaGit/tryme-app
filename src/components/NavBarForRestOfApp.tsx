import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const NavBarforRestOfApp = () => {
  return (
    <nav className='w-full h-[10vh] flex items-center justify-between p-nav bg-white'>
      <Logo />

      <ul className='font-quicksand font-bold text-xs flex items-center gap-8'>
        <Link href={'/'}>
          Home
        </Link>
        <Link href={'/product'}>
          Product
        </Link>
        <Link href={''}>
          About
        </Link>
        <Link href={''}>
          Contact
        </Link>

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

export default NavBarforRestOfApp