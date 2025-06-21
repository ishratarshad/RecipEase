import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <h1>Welcome to RecipEase</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        RecipEase is your personalized recipe finder designed for people with dietary restrictions,
        allergies, or specific preferences. Simply tell us what you're avoiding or aiming for,
        and we'll show you safe and delicious recipes — with ingredients, steps, and videos when available.
      </p>
      <Link to="/search">
        <button style={{ marginTop: '30px', padding: '12px 24px', fontSize: '18px', cursor: 'pointer' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
