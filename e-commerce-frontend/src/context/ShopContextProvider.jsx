import { ShopContext } from './ShopContext';
import {products} from '../assets/assets';
import { useState } from 'react';

const ShopContextProvider = (props) => {

  const currency = '£';
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);


  const value = {
    products, currency, search, setSearch, showSearch, setShowSearch
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider