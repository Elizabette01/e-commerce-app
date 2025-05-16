import React, { useContext } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';


const ProductCard = ({id, image, name, price}) => {

  const {currency} = useContext(ShopContext);

  return (
    <Link to={`/Product/${id}`} className='flex flex-col gap-1'>
      <div className=" object-fit-cover overflow-hidden ">
        <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out'/>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="text-sm font-medium">
          <h3 className="pd-3 ">{name}</h3>
          <p className=" ">{currency}{price}</p>
        </div>
        <FaShoppingBag className='cursor-pointer text-sm md:text-base text-gray-400' />
      </div>
    </Link>
  )
}

export default ProductCard

