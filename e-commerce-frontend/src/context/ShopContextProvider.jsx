import { ShopContext } from './ShopContext';
import {products} from '../assets/assets';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ShopContextProvider = (props) => {

  const currency = '£';
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState({});

  // Function that updates the cart when an add to cart button is clicked

  const addToCart = async (itemId, size) => {

    if (!size){
      toast.error('Select a size');
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else{
        cartData[itemId][size] = 1
      }
    }

    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
    toast.success('Product added to cart');
  }

  useEffect(() => {

  }, [cartItems])


  const value = {
    products, currency, search, setSearch, showSearch, setShowSearch, cartItems, addToCart
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider