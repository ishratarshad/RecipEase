// client/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#ffe4ec',
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Poppins, sans-serif',
      borderBottom: '1px solid #ddd'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff4081' }}>
        RecipEase
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/search" style={linkStyle}>Find Recipes</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500'
};

export default Navbar;
