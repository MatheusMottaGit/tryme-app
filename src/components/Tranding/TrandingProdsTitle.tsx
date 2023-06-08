import React from 'react'

const TrandingProdsTitle = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <h1 className='text-3xl'>Tranding Products</h1>
        <span className='text-sm font-quicksand'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
      </div>

      <div className='flex items-end font-quicksand text-sm font-bold'>
        <button className='rounded-full border-2 border-darkGray p-2 w-28'>
          View all
        </button>
      </div>
    </div>
  )
}

export default TrandingProdsTitle