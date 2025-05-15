import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[40vh] md:h-[80vh] flex bg-img justify-center items-center text-white'>
      <div className='flex flex-col justify-center items-center bg-black/10 p-5'>
        <h1 className='text-xl sm:text-2xl lg:text-4xl uppercase font-bold hero-h1'>Wear Your mood</h1>
        <p className='text-sm sm:text-base lg:text-2xl'>own your look</p>
      </div>
      
    </div>
  )
}

export default Hero
