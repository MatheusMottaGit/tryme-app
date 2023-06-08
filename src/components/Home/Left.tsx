import React from 'react'

const Left = () => {
  return (
    <div className='w-full p-nav flex flex-col items-center gap-6 text-center'>
      <h1 className='text-3xl'>
        Medium length hero headline goes here
      </h1>

      <span className='font-quicksand text-darkGray text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </span>

      <button className='bg-orange rounded-full p-3 text-white font-quicksand font-bold w-40'>
        Start Looking
      </button>
    </div>
  )
}

export default Left