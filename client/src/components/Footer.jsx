import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#ffe6eb',
      textAlign: 'center',
      fontSize: '14px'
    }}>
      <p>RecipEase © 2025 – All Rights Reserved</p>
      <div style={{ margin: '10px 0' }}>
        <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
        <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          Instagram
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
