import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/cart';
import PlaceOrder from './Pages/PlaceOrder';
import Products from './Pages/Products';
import Order from './Pages/Order';
import Login from './Pages/login';
import Categories from './Pages/Categories';
import Contact from './Pages/contact';

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/order' element={<Order />} />
        <Route path='/product/:productId' element={<Products />} />
        <Route path='/place-order' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App
