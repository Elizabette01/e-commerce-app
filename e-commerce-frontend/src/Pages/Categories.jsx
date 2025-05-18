import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { MdOutlineArrowDropDown } from "react-icons/md";
import Filter from '../components/Filter';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';

const Categories = () => {

  const { products } = useContext(ShopContext);
  const [filterMenu, setFilterMenu] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() =>{
    setFilterProducts(products)
  }, [products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 py-10 border-t w-[90%] mx-auto'>

      {/* Filter Options */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer" onClick={()=> {setFilterMenu(!filterMenu)}} >FILTERS 
          <MdOutlineArrowDropDown className={`text-2xl sm:hidden ${filterMenu ? 'rotate-180' : ''} transition-all duration-300`}/>
        </p>

        {/* Category Filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filterMenu ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">

            <Filter value={'Men'}/>
            <Filter value={'Women'}/>
            <Filter value={'Children'}/>
            
            {/* <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Men'} /> Men
            </p>

            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Women'} /> Women
            </p>

            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Children'} /> Children
            </p> */}

          </div>
        </div>

        {/* Sub category Filter */}

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${filterMenu ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">

            <Filter value={'Topwear'}/>
            <Filter value={'Bottomwear'}/>
            <Filter value={'Winterwear'}/>
            
            {/* <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Topwear'} /> Topwear
            </p>

            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Bottomwear'} /> Bottomwear
            </p>

            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Winterwear'} /> Winterwear
            </p> */}

          </div>
        </div>
      </div>
      
      {/* Right side */}
      <div className="flex-1">

        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Title text1={'PRODUCTS'} />

          {/* Product Sort */}
          <div className="flex items-center">
            <p className="text-sm">Sort by:</p>

            <select className=" text-sm px-2">
              <option value="relevant" className="">Relevant</option>
              <option value="low-high" className="">Low to High</option>
              <option value="high-low" className="">High to Low</option>
          </select>
          </div>
         
        </div>

        {/* Product display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item, i) => (
              <ProductCard key={i} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Categories
