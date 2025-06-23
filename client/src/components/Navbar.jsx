import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#ffe4ec',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Poppins, sans-serif',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ margin: 0 }}>RecipEase</h2>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/search" style={linkStyle}>Find Recipes</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  marginLeft: '20px',
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
  fontSize: '16px'
};

export default Navbar;
