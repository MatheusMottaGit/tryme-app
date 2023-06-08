import React from 'react'
import OffersTitle from './OffersTitle'
import Products from '../Products'

const OffersAndPromotions = () => {
  return (
    <section className='bg-white h-screen w-screen p-nav flex items-center justify-center'>
      <div className='w-full flex flex-col gap-20'>
        <OffersTitle />

        <Products />
      </div>
    </section>
  )
}

export default OffersAndPromotions