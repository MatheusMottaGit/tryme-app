import React from 'react'

import logo from '../../assets/Image.svg'
import Image from 'next/image'

const MainImage = () => {
  return (
    <>
      <Image 
        src={logo}
        alt=''
        className='h-full'
      />
    </>
  )
}

export default MainImage