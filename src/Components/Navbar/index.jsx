import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPING</p>
        </div>
        <ul className="nav-menu">
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-loging-cart">
            <button>Login</button>
            <img src={cart_icon} alt="cart-icon" />
        </div>
    </div>
  )
}

export default Navbar