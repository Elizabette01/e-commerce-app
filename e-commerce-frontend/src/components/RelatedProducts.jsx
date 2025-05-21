import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductCard from './ProductCard';

const RelatedProducts = ({category, subCategory, id}) => {

  const { products } = useContext(ShopContext);

  const [related, setRelated] =useState([])

  useEffect(()=>{

    if (products.length > 0) {
      let productsCopy = products.slice();    

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
      productsCopy = productsCopy.filter((item) => id !== item._id);

      setRelated(productsCopy.slice(0,5));
    }
  }, [products])

  return (
    <div className='mb-20 mx-auto w-[90%]'>
      <div className="text-center mb-5">
        <Title text1 = {'Related Products'}/>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {
          related.map((item,i) => (
            <ProductCard key={i} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts
