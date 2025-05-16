import React from 'react'
import { assets } from '../assets/assets';
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='bg-gray-100'>
      <div className="flex flex-col sm:grid grid-cols-[1.5fr_1fr_1fr] gap-14 pt-24 text-sm w-[90%] mx-auto">
        <div>
          <img src={assets.logo} alt="Company Logo" className="w-32 mb-5" />
          <p className="w-full text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus quas, possimus quos dolorem dicta id? Facere, ipsam quibusdam, itaque sequi omnis accusamus quidem.</p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Delivery</li>
            <li>Promotions $ Discounts</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
           <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+44 07123 456789</li>
            <li>contact@forever.com</li>
          </ul>
          <div className="">
            <p className="text-xl font-medium mt-5 mb-2">Be Social</p>
            <div className="flex gap-2 text-[#c782a4] text-2xl">
              <FaInstagramSquare className='cursor-pointer' />
              <FaFacebook className='cursor-pointer' />
              <FaXTwitter className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 w-[90%] mx-auto">
        <hr className='text-gray-400' />
        <p className="py-5 text-xs text-center text-gray-600"> Copyright 2025@ forever.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
