import React from 'react'
import { assets } from '../assets/assets';
import PolicyCard from '../components/PolicyCard';

const Policy = () => {
  return (
    <div className="my-5 md:my-7 bg-gray-100 py-5 md:py-7">
      <div className='flex flex-col sm:flex-row w-[90%] md:w-3/4 mx-auto justify-around gap-10 sm:gap-2 text-center py-3'>
        <PolicyCard image={assets.exchange_icon} text1={'Easy Exchange Policy'} text2={'We offer hassle free exchange policy'} />
        <PolicyCard image={assets.quality_icon} text1={'7 days return policy'} text2={'we provide 7days free return policy'} />
        <PolicyCard image={assets.support_img} text1={'best customer support'} text2={'we provide 24/7 customer support'} />
      </div>
    </div> 
  )
}

export default Policy
