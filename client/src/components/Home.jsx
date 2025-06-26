import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { src: '/images/slide1.jpg', caption: 'Vegan • A colorful bowl with quinoa, avocado, and chickpeas' },
  { src: '/images/slide2.jpg', caption: 'Gluten-Free • Grilled chicken with fresh vegetables' },
  { src: '/images/slide3.jpg', caption: 'Nut-Free • Allergy-safe school lunch labeled clearly' },
  { src: '/images/slide4.jpg', caption: 'Low-Carb • Zucchini noodles and grilled salmon' },
  { src: '/images/slide5.jpg', caption: 'Breakfast • Oatmeal with fruit and seeds' },
  { src: '/images/slide6.jpg', caption: 'Dinner • Chickpea pasta stir fry with greens' }
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div style={{
      padding: '60px 20px',
      fontFamily: 'Poppins, sans-serif',
      background: 'linear-gradient(to bottom right, #ffe6f0, #e0f7fa)',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#d65d90',
        marginBottom: '20px'
      }}>
        Welcome to RecipEase
      </h1>

      <p style={{
        fontSize: '1.25rem',
        color: '#5f5f5f',
        maxWidth: '720px',
        margin: '0 auto 40px',
        lineHeight: '1.8'
      }}>
        Helping you discover safe, delicious recipes tailored to your dietary needs — whether you're gluten-free, nut-free, vegan, or just curious!
      </p>

      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Slider {...settings}>
          {slides.map((slide, idx) => (
            <div key={idx}>
              <img
                src={slide.src}
                alt={`Slide ${idx + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  height: '360px',
                  objectFit: 'cover',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
                }}
              />
              <p style={{
                marginTop: '12px',
                fontStyle: 'italic',
                color: '#7d7d7d',
                fontSize: '15px'
              }}>
                {slide.caption}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* CTA Button */}
      <div style={{ marginTop: '50px' }}>
        <Link to="/search">
          <button style={{
            backgroundColor: '#ffc1cc',
            border: 'none',
            padding: '14px 30px',
            fontSize: '17px',
            fontWeight: '600',
            borderRadius: '30px',
            cursor: 'pointer',
            color: '#4d2c3d',
            transition: '0.3s ease',
            boxShadow: '0 4px 12px rgba(255, 192, 203, 0.5)'
          }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#fbb6c9')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#ffc1cc')}
          >
            ✨ Find Recipes
          </button>
        </Link>
      </div>

      {/* Divider */}
      <hr style={{ margin: '60px auto 40px', width: '80%', borderColor: '#fddde6' }} />

      {/* 🌟 Features Section */}
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#c94d7c', fontSize: '2rem', marginBottom: '30px' }}>Why RecipEase?</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Tailored to You', desc: 'Filter by allergy, diet, or preference.' },
            { title: 'Simple Ingredients', desc: 'No confusing items — just what you need.' },
            { title: 'Modern Design', desc: 'Smooth, responsive, and beautiful to use.' }
          ].map((f, idx) => (
            <div key={idx} style={{
              backgroundColor: '#fff0f5',
              padding: '20px',
              borderRadius: '16px',
              width: '240px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: '#d65d90', marginBottom: '10px' }}>{f.title}</h3>
              <p style={{ color: '#555' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr style={{ margin: '60px auto 40px', width: '80%', borderColor: '#fddde6' }} />

      {/* 💬 Testimonials */}
      <section style={{ maxWidth: '800px', margin: '0 auto', marginTop: '20px' }}>
        <h2 style={{ color: '#c94d7c', fontSize: '2rem', marginBottom: '20px' }}>What Our Users Say</h2>
        <blockquote style={{
          backgroundColor: '#fffafa',
          padding: '20px',
          borderRadius: '12px',
          fontStyle: 'italic',
          color: '#666',
          marginBottom: '20px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}>
          “RecipEase helped me find gluten-free meals I actually enjoy. Game-changer!” — Samira R.
        </blockquote>
        <blockquote style={{
          backgroundColor: '#fef3f7',
          padding: '20px',
          borderRadius: '12px',
          fontStyle: 'italic',
          color: '#666',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}>
          “It’s like Pinterest, but smarter and for your allergies!” — Jordan L.
        </blockquote>
      </section>

      {/* Final CTA */}
      <div style={{ marginTop: '60px' }}>
        <h3 style={{ color: '#aa4466' }}>Ready to explore personalized recipes?</h3>
        <Link to="/search">
          <button style={{
            backgroundColor: '#e6b8c4',
            border: 'none',
            padding: '12px 26px',
            fontSize: '16px',
            borderRadius: '24px',
            marginTop: '15px',
            cursor: 'pointer',
            fontWeight: '500',
            color: '#4d2c3d'
          }}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
