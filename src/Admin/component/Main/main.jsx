import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../Navbar/Home/Home';
import Order from '../Navbar/Order/Order';
import Product from '../Navbar/Product/Product';
import User from '../Navbar/User/User';
import './main.scss';
function Main() {
  return (
    <div className='main relative'>
      <div className='w-[90%] h-auto  mt-[5px] rounded-bl-[30px] rounded-br-[30px] bg-black absolute border-[5px] border-white flex justify-around'>
        <p className='text-[25px]'>0 <i className='fa fa-user'></i></p>
        <p className='text-[25px]'>0 <i className='fa fa-mug-hot'></i></p>
        <p className='text-[25px]'>0 <i className='fa fa-cart-shopping'></i></p>
      </div>
      <div className='w-[98%] h-full my-[5px] rounded-[30px] bg-black pt-[8rem]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-admin" element={<Home />} />
            <Route path="/qly-dhang" element={<Order/>} />
            <Route path="/qly-spham" element={<Product />} />
            <Route path="/qly-user" element={<User />} />
          </Routes>
      </div>

    </div>
  )
}

export default Main