import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: '60px',
        padding: '30px 20px',
        backgroundColor: '#ffe6eb',
        textAlign: 'center',
        fontSize: '14px',
        color: '#444',
        fontFamily: 'Poppins, sans-serif',
        borderTop: '2px solid #ffc1d8'
      }}
    >
      <p style={{ marginBottom: '12px', fontWeight: '500' }}>
        RecipEase © 2025 – All Rights Reserved
      </p>

      <div style={{ marginBottom: '10px' }}>
        <Link
          to="/about"
          style={{
            margin: '0 12px',
            color: '#ff5c99',
            textDecoration: 'none'
          }}
        >
          About
        </Link>

        <Link
          to="/contact"
          style={{
            margin: '0 12px',
            color: '#ff5c99',
            textDecoration: 'none'
          }}
        >
          Contact
        </Link>
      </div>

      <div>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: '0 10px',
            color: '#c94f7c',
            textDecoration: 'none'
          }}
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: '0 10px',
            color: '#c94f7c',
            textDecoration: 'none'
          }}
        >
          Facebook
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: '0 10px',
            color: '#c94f7c',
            textDecoration: 'none'
          }}
        >
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
