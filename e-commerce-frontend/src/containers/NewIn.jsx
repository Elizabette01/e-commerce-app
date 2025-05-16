import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';

const NewIn = () => {

    const { products } = useContext(ShopContext);
    const [NewProduct, setNewProduct] = useState([]);

    useEffect(() => {
      setNewProduct(products.slice(0, 5))
    }, [products])
  return (

    <div className='my-10 w-[90%] mx-auto'>
      <div className="text-center mb-5">
        <Title text1 = {'New In'}/>
        <p className="text-xs w-3/4 m-auto sm:text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt commodi placeat exercitationem vitae natus</p>
      </div>
  
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {
          NewProduct.map((item,i) => (
            <ProductCard key={i} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default NewIn
