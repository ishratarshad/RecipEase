import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
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
