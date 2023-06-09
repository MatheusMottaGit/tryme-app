import React from 'react'

import logo from '../assets/Column.svg'

import Image from 'next/image'

const Logo = () => {
  return (
      <Image 
        src={logo} 
        alt=''
        width={150}
      />
  )
}

export default Logo