import { React, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaShoppingBag } from "react-icons/fa";
import { RiMenu3Fill, RiCloseLargeLine  } from "react-icons/ri";

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='font-semibold py-2 flex justify-between items-center'>
      <img className='w-36' src={assets.logo} alt="Brand Logo" />

      <div className='hidden md:flex gap-5 text-md text-gray-700'>
        <NavLink to='/' className='uppercase'>Home</NavLink>
        <NavLink to='/categories' className='uppercase'>Categories</NavLink>
        <NavLink to='/about' className='uppercase'>About</NavLink>
        <NavLink to='/contact' className='uppercase'>Contact</NavLink>
      </div>

      <div className='flex items-center justify-end gap-5 w-36'>
        <FaSearch className='cursor-pointer text-xl '/>

        <div className='group relative'>
          <FaUserCircle className='cursor-pointer text-xl'/>
          <div className='group-hover:block hidden absolute dropdown-menu pt-2 right-0'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 '>
              <p className='cursor-pointer hover:text-[#c782a4]'>Profile</p>
              <p className='cursor-pointer hover:text-[#c782a4]'>Orders</p>
              <p className='cursor-pointer hover:text-[#c782a4]'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <FaShoppingBag className='cursor-pointer text-xl' />
          <p className='absolute w-4 text-center leading-4 aspect-square rounded-full text-[0.5rem] bg-[#c782a4] text-white right-[-5px] bottom-[-7px]'>2</p>
        </Link>

        <RiMenu3Fill className='text-xl cursor-pointer hover:text-[#c782a4] md:hidden' onClick={()=> {setToggleMenu(true)}} />

          {toggleMenu && (
            <div className='fixed top-0 right-0 bottom-0 overflow-hidden bg-gray-100 transition-all duration-300 py-5 px-5 flex flex-col gap-5'>
              <RiCloseLargeLine className='text-2xl absolute right-5 hover:text-[#c782a4]' onClick={()=> {setToggleMenu(false)}} />
              <div className='flex flex-col w-full h-full gap-5 text-md text-gray-700 mt-24'>
                <NavLink to='/' className='uppercase'>Home</NavLink>
                <NavLink to='/categories' className='uppercase'>Categories</NavLink>
                <NavLink to='/about' className='uppercase'>About</NavLink>
                <NavLink to='/contact' className='uppercase'>Contact</NavLink>
              </div>
            </div>
          )}
      </div>
    </nav>
  )
}

export default NavBar
