import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', textAlign: 'center' }}>
      <h2>Welcome to RecipEase</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        RecipEase helps users with dietary restrictions find personalized, safe, and delicious meals — one plate at a time.
        Simply tell us what you can or can’t eat, and we’ll match you with recipes that work for your lifestyle.
      </p>
      <Link to="/search">
        <button style={{
          marginTop: '30px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px'
        }}>
          Start Finding Recipes
        </button>
      </Link>
    </div>
  );
};

export default Home;
