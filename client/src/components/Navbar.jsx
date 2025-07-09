import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const resizeBar = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };

    window.addEventListener('resize', resizeBar);
    return () => window.removeEventListener('resize', resizeBar);
  }, []);

  return (
    <nav style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
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
          display: 'flex',
          textDecoration: 'none',
          color: '#ff80ab',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          /* Mobile screen logo adjustment */
          position: isMobile ? 'absolute' : 'static',
          left: isMobile ? '50%' : 'auto',
          transform: isMobile ? 'translateX(-50%)' : 'none',
        }}
        onClick={() => setIsOpen(false)}
      >
        RecipEase
      </Link>

      {/* Hamburger menu button when on mobile*/}
      {isMobile && (
        <div
          onClick={toggleMenu}
          style={{
            cursor: 'pointer',
            width: '25px',
            height: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            marginRight: 'auto',
            zIndex: 1100
          }}
        >
          <span
            style={{ height: '3px', backgroundColor: '#ff80ab', borderRadius: '2px' }}
          />
          <span
            style={{ height: '3px', backgroundColor: '#ff80ab', borderRadius: '2px' }}
          />
          <span
            style={{ height: '3px', backgroundColor: '#ff80ab', borderRadius: '2px' }}
          />
        </div>
      )}


      {/* Navigation links on the right */}

      {(!isMobile || isOpen) && (
        <div
          style={{
            display: 'flex',
            gap: '30px',
            width: isMobile ? '100%' : 'auto',
            flexDirection: isMobile ? 'column' : 'row',
            marginTop: isMobile ? '20px' : '0',
            alignItems: isMobile ? 'center' : 'unset',        
            textAlign: isMobile ? 'center' : 'unset',
          }}
        >
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/search" style={navLinkStyle}>Search</Link>
          <Link to="/about" style={navLinkStyle}>About</Link>
          <Link to="/contact" style={navLinkStyle}>Contact</Link>
        </div>
      )}
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