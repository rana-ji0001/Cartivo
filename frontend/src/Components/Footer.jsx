import React from 'react';
import { Link } from 'react-router';
import '../Styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-contents'>
        <div className='brand-container'>
          <Link className='brand'>Cartivo</Link>
          <p>Premium E-Commerce Platform.</p>
        </div>
        
        <div className="div-link">
          <Link to="/about" >About Us</Link>
          <Link to="/return" >Return Policy</Link>
          <Link to="/disclaimer" >Disclaimer</Link>
        </div>
        
        <div style={{ color: '#404E3B', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Cartivo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
