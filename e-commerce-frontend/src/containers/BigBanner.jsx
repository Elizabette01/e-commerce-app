import React from 'react'
import { Link } from 'react-router-dom'

const BigBanner = ({image, text1, text2, text3}) => {
  return (
    <div className='mt-7 w-[90%] md:w-3/4 mx-auto flex flex-col gap-3 items-center text-center mb-5'>
      <div className=" md:h-72 lg:h-96 overflow-hidden object-fit-cover">
        <img src={image} alt="3 girls chilling" />
      </div>
      <h2 className='text-gray-500 font-semibold hero-h1 capitalize text-3xl'>{text1}</h2>
      <p className="text-xs w-3/4 m-auto sm:text-sm md:text-base">{text2}</p>
      <Link to={`/categories`} className="uppercase px-5 py-2 border border-gray-600 text-xs self-center rounded hover:bg-[#c782a4] hover:text-white hover:border-white">{text3}</Link>
    </div>
  )
}

export default BigBanner
