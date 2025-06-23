import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '700px', margin: '0 auto' }}>
      <h2>About RecipEase</h2>
      <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
        RecipEase is a recipe discovery platform built to support users with food allergies, dietary restrictions, and lifestyle preferences.
        Whether you’re vegan, gluten-free, or nut-free, RecipEase filters and recommends personalized meals tailored to your needs.
      </p>
      <p style={{ fontSize: '1.1rem', marginTop: '15px' }}>
        Our app uses the Spoonacular API to provide reliable recipe data, including ingredients, cooking instructions, and preparation time.
        We're committed to making food discovery safer, easier, and more enjoyable.
      </p>
    </div>
  );
};

export default About;
