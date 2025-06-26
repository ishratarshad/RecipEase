import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 40px',
      backgroundColor: '#ffe6ec',
      fontFamily: 'Poppins, sans-serif',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo / Brand on the left */}
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#ff80ab',
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}
      >
        RecipEase
      </Link>

      {/* Navigation links on the right */}
      <div style={{ display: 'flex', gap: '30px' }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/search" style={navLinkStyle}>Search</Link>
        <Link to="/about" style={navLinkStyle}>About</Link>
        <Link to="/contact" style={navLinkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#555',
  fontWeight: '500',
  fontSize: '1rem',
  transition: 'color 0.2s ease',
};

export default Navbar;
