import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';

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
        borderTop: '2px solid #ffc1d8',
      }}
    >
      <p style={{ marginBottom: '16px', fontWeight: '500' }}>
        RecipEase © 2025 – All Rights Reserved
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginBottom: '12px',
        }}
      >
        <Link
          to="/about"
          style={{
            color: '#ff5c99',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          About
        </Link>

        <span style={{ color: '#ff5c99', fontWeight: '500' }}>
          Join us on Social Media
        </span>

        <Link
          to="/contact"
          style={{
            color: '#ff5c99',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          Contact
        </Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ff5c99', fontSize: '20px' }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#3b5998', fontSize: '20px' }}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#000', fontSize: '20px' }}
        >
          <FaXTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;