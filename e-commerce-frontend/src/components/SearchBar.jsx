import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { FaSearch } from "react-icons/fa";
import { RiCloseLargeLine  } from "react-icons/ri";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
  const [visible, setVisible] = useState(false)

  const location = useLocation();

  useEffect(()=> {
    if (location.pathname.includes('categories')) {
      setVisible(true)
    }
    else {
      setVisible(false)
    }
  }, [location])

  return showSearch && visible ? (
    <div className='bg-gray-50 text-center'>
      <div className="inline-flex items-center justify-center border border-gray-400 rounded-full px-5 py-2 my-5 mx-auto w-3/4 sm:w-1/2">
        <input type="text" className="flex-1 outline-none bg-inherit text-sm placeholder:text-gray-400" placeholder='Search  Product' value={search} onChange={(e) => setSearch(e.target.value)} />
        {/* <FaSearch className='cursor-pointer text-sm md:text-xl '/> */}
        <RiCloseLargeLine className='ml-4 text-xl inline cursor-pointer' onClick={()=> {setShowSearch(false)}} />
      </div>
    </div>
  ) : null
}

export default SearchBar
