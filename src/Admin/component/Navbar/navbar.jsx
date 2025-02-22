import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './navbar.scss';
import axios from 'axios';
import API__URL from '../../../config';

function Navbar() {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex(index);
    }

    const handleLogout = async () => {
        try {
          await axios.post(`${API__URL}/auth/logout`, {},
            {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
              },
            },
          );
          console.log('Logout admin sucessfull !');
          localStorage.removeItem('username');
          localStorage.removeItem('accessToken');
          navigate('/dang-nhap');
        } catch (error) {
          console.log("Logout failed", error);
        }
      }

    return (
        <div className='nav'>
            <div className='logo-admin'>
                <img className='w-full h-full px-[20px] ' src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg" alt="" />
            </div>
            <div className='menu_nav'>
                <ul>
                    <li onClick={() => handleClick(0)} className={` ${activeIndex == 0 ? 'active' : ''} `}>
                        <Link to="/home-admin" >
                            <div className="icon">
                                <i className='fa fa-house'></i>
                            </div>
                            <p>Home</p></Link>
                    </li>
                    <li onClick={() => handleClick(1)} className={` ${activeIndex == 1 ? 'active' : ''} `}>
                        <Link to="/qly-user" >
                            <div className="icon"><i className='fa fa-user'></i></div>
                            <p>User</p>
                        </Link>
                    </li>
                    <li onClick={() => handleClick(3)} className={` ${activeIndex == 3 ? 'active' : ''} `}>
                        <Link to="/qly-spham" >
                            <div className="icon">
                                <i className='fa fa-mug-hot'></i>
                            </div>
                            <p>Product</p></Link>
                    </li>
                    <li onClick={() => handleClick(4)} className={` ${activeIndex == 4 ? 'active' : ''} `}>
                        <Link to="/qly-dhang" >
                            <div className="icon">
                                <i className='fa fa-cart-shopping'></i>
                            </div>
                            <p>Order</p></Link>
                    </li>
                </ul>
                <div onClick={handleLogout} className='footer_nav'>
                    <i className='fa fa-right-from-bracket text-white'></i>
                    <p className='text-white ' onClick={handleLogout}>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;