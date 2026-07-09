import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to="/"><img src='/frontend/public/logo.png'/>Cartivo</Link>
      </div>
      <ul className='navbar-links'>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
