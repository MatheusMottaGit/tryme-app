import React from 'react'
import Left from './Left'
import Right from './Right'

const Presentation = () => {
  return (
    <section className="w-full h-[90vh] flex items-center">
      <Left />

      <Right />
    </section>
  )
}

export default Presentation