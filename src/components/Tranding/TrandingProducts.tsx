import React from 'react'
import TrandingProdsTitle from './TrandingProdsTitle'
import Products from '../Products'

const TrandingProducts = () => {
  return (
    <section className='bg-white h-screen w-screen p-nav flex items-center justify-center'>
      <div className='w-full flex flex-col gap-20'>
        <TrandingProdsTitle />

        <Products />
      </div>
    </section>
  )
}

export default TrandingProducts