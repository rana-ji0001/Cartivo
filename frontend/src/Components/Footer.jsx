import React from 'react'
import { Link } from 'react-router'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; 2026 All Rights Reserved Cartivo</p>
        <ul className='footer-links'>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/privacy">Privacy</Link></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer
