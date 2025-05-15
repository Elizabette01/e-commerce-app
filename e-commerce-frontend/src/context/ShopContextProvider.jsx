import { ShopContext } from './ShopContext';
import {products} from '../assets/assets';

const ShopContextProvider = (props) => {

  const currency = '£'
  const value = {
    products, currency
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider