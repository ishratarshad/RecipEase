import React from 'react';

const About = () => {
  return (
    <div
      style={{
        fontFamily: 'Poppins, sans-serif',
        background: 'linear-gradient(to bottom right, #fdf6f9, #eafafc)',
        padding: '60px 20px',
        color: '#333',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: '#fff',
          padding: '50px 40px',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            color: '#d65d90',
            fontSize: '2.5rem',
            marginBottom: '40px'
          }}
        >
          About RecipEase
        </h2>

        <section style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h3 style={{ color: '#ff80ab', fontSize: '1.6rem', marginBottom: '12px' }}>🌱 Our Mission</h3>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            maxWidth: '720px',
            margin: '0 auto',
            color: '#444'
          }}>
            RecipEase was created to support people with dietary restrictions in finding personalized,
            delicious meals. Whether you're vegan, gluten-free, nut-free, or just curious —
            our goal is to make healthy eating beautiful, simple, and joyful.
          </p>
        </section>

        <section style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h3 style={{ color: '#ff80ab', fontSize: '1.6rem', marginBottom: '12px' }}>Our Team</h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              fontSize: '1.1rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap',
              marginTop: '10px',
              color: '#333'
            }}
          >
            <li>Ishrat Arshad</li>
            <li>Shithila Urshi</li>
            <li>Bonnie Lei</li>
            <li>Angela Yu</li>
          </ul>
        </section>

        <section style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#ff80ab', fontSize: '1.6rem', marginBottom: '12px' }}>💬 A Note From Us</h3>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            maxWidth: '720px',
            margin: '0 auto',
            color: '#444'
          }}>
            RecipEase is more than a recipe finder, it's a project born from care and empathy.
            We're students and creators who wanted to make food accessible, beautiful, and fun for everyone.
            Thanks for being part of the journey!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
