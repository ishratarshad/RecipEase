import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Poppins, sans-serif' }}>
      <h2 style={{ color: '#ff80ab', fontSize: '2rem', marginBottom: '20px' }}>About RecipEase</h2>
      
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7' }}>
        <strong>RecipEase</strong> is designed to make meal planning simple and joyful for people with dietary restrictions.
        Whether you're allergic to nuts, following a gluten-free diet, or trying out veganism — RecipEase helps you find
        personalized, safe, and delicious recipes, powered by the Spoonacular API.
      </p>

      <p style={{ fontSize: '1.1rem', color: '#555', marginTop: '20px', lineHeight: '1.7' }}>
        Our mission is to support inclusive, health-conscious eating by providing a curated experience that
        adapts to your unique needs — all in a clean, beautiful interface.
      </p>

      <p style={{ fontSize: '1.1rem', color: '#555', marginTop: '20px', lineHeight: '1.7' }}>
        Built with React, integrated with Spoonacular's recipe database, and crafted with care by a passionate student team.
      </p>
    </div>
  );
};

export default About;
