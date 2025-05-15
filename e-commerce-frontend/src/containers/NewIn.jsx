import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const NewIn = () => {

    const { products } = useContext(ShopContext)
    console.log(products)
  return (

    <div>
  
    </div>
  )
}

export default NewIn
