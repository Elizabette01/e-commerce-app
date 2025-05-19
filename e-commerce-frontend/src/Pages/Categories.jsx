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

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  // Function to filter the products based on categories

  // the function updates the categories array to include the value of the checked category, and remove it if unchecked
  const toggleCategory = (e) => {

    const eValue = e.target.value;

    if (category.includes(eValue)) {
      setCategory(prev => prev.filter(item => item !== eValue))
    }
    else(
      setCategory(prev => [...prev,eValue])
    )
  };

  // the function updates the subcategories array to include the value of the checked subcategory, and remove it if unchecked
  const toggleSubCategory = (e) => {

    const eValue = e.target.value;

    if (subCategory.includes(eValue)) {
      setSubCategory(prev => prev.filter(item => item !== eValue))
    }
    else(
      setSubCategory(prev => [...prev,eValue])
    )
  };

  /*
   The function updates the product array to include all products
   then filters the array to check if the item's category is included in the categorie array
   it then updates he productscopy array based on the filter result
   finally it updates the filter products array with the result of the filtered productsCopy
  */

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    setFilterProducts(productsCopy)
  }

  useEffect(() =>{
    setFilterProducts(products)
  }, [])

  useEffect(() =>{
    applyFilter()
  }, [category, subCategory])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 py-10 border-t w-[90%] mx-auto'>

      {/* Filter Options */}
      <div className="min-w-60 sticky top-1">
        <p className="my-2 text-xl flex items-center cursor-pointer" onClick={()=> {setFilterMenu(!filterMenu)}} >FILTERS 
          <MdOutlineArrowDropDown className={`text-2xl sm:hidden ${filterMenu ? 'rotate-180' : ''} transition-all duration-300`}/>
        </p>

        {/* Category Filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filterMenu ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">

            <Filter value={'Men'} fnx={toggleCategory} />
            <Filter value={'Women'} fnx={toggleCategory} />
            <Filter value={'Children'} fnx={toggleCategory} />
            
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

            <Filter value={'Topwear'} fnx={toggleSubCategory} />
            <Filter value={'Bottomwear'} fnx={toggleSubCategory} />
            <Filter value={'Winterwear'} fnx={toggleSubCategory} />
            
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

            <select className=" text-sm px-2 outline-0">
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
