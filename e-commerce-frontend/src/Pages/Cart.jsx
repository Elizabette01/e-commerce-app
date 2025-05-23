import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { BsTrash3 } from "react-icons/bs";

const Cart = () => {

  const { products, currency, cartItems, updateCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]){
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size:item,
            quantity: cartItems[items][item]
          })
        }
      }
    }

    setCartData(tempData)

  }, [cartItems])

  const updateQuantity = (e, item) => {
    e.target.value === '' || e.target.value === '0' ?
    null :
    updateCart(item._id, item.size, Number(e.target.value))
  }

  const deteteItem = () => {
    
  }


  return (
    <div className='py-10 w-[90%] mx-auto'>

      <Title text1={'Your Cart'}/>

      <div className="mt-10">
        {
          cartData.map((item, i) => {
            const cartProducts = products.find((product) => product._id === item._id)

            return (
              <div key={i} className=" border-t border-gray-400 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 py-3">
                <div className="flex items-center gap-6">
                  <img src={cartProducts.image[0]} alt="" className="w-16 sm:w-20" />

                  <div className="">
                    <p className="text-xs sm:text-lg font-medium">{cartProducts.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{cartProducts.price}</p>
                      <p className="border border-gray-400 bg-gray-100 w-8 h-7 grid place-content-center">{item.size}</p>
                    </div>
                  </div>
                </div>
                
                <input onChange={updateQuantity(e, item)} type="number" min={1} defaultValue={item.quantity}  className='border max-w-10 px-2 py-1'/>

                <BsTrash3  className='cursor-pointer text-sm md:text-xl' />
              </div>
            )
          
          })
        }
      </div>
      
    </div>
  )
}

export default Cart
