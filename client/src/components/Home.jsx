import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    src: '/images/slide1.jpg',
    caption: 'Vegan • A colorful bowl with quinoa, avocado, and chickpeas'
  },
  {
    src: '/images/slide2.jpg',
    caption: 'Gluten-Free • Grilled chicken with fresh vegetables'
  },
  {
    src: '/images/slide3.jpg',
    caption: 'Nut-Free • Allergy-safe school lunch labeled clearly'
  },
  {
    src: '/images/slide4.jpg',
    caption: 'Low-Carb • Zucchini noodles and grilled salmon'
  },
  {
    src: '/images/slide5.jpg',
    caption: 'Breakfast • Oatmeal with fruit and seeds'
  },
  {
    src: '/images/slide6.jpg',
    caption: 'Dinner • Chickpea pasta stir fry with greens'
  }
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
    <div style={{ padding: '40px', fontFamily: 'Poppins, sans-serif', backgroundColor: '#fef6f9' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#ff80ab' }}>Welcome to RecipEase</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '20px auto' }}>
        RecipEase helps users with dietary restrictions find personalized, safe, and delicious meals — one plate at a time.
      </p>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Slider {...settings}>
          {slides.map((slide, idx) => (
            <div key={idx}>
              <img
                src={slide.src}
                alt={`Slide ${idx + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  height: '350px',
                  objectFit: 'cover',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
              <p style={{
                textAlign: 'center',
                marginTop: '10px',
                fontStyle: 'italic',
                color: '#777',
                fontSize: '14px'
              }}>
                {slide.caption}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link to="/search">
          <button style={{
            backgroundColor: '#ffd1dc',
            border: 'none',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#333'
          }}>
            Find Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
