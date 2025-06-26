import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
<<<<<<< HEAD
=======
      position: 'sticky',
      top: '0px',
      zIndex: '999',
      backgroundColor: '#ffe4ec',
      padding: '12px 24px',
>>>>>>> 9c09aeef1a11f2edd7f67b7e8bba1fcf45567dbe
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: '#ffe6ec',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#ff80ab', fontWeight: 'bold' }}>RecipEase</Link>
      <Link to="/search" style={{ textDecoration: 'none', color: '#333' }}>Search</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
