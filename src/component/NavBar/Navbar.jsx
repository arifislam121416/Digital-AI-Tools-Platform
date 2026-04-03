import React from 'react';
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    return (
  <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
        <li>
          <a>Features</a>
          <ul className="p-2">
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
          </ul>
        </li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className=" text-[#8c27f2ce] text-xl md:text-4xl"><span className="bg-linear-to-r  from-purple-900 to-blue-600 bg-clip-text text-transparent font-semibold">DigitalTools</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li>
          <summary>Features</summary>
      </li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <FaShoppingCart />
    <a className='btn rounded-full'>Login</a>
    <a className=" bg-linear-to-r  from-purple-900 to-blue-600 text-white p-3  rounded-full text-[10px] md:text-[16px] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">Get Started</a>
  </div>
</div>
    );
};

export default Navbar;