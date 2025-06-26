import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  console.log('Recipe data:', recipe);

  return (
    <div
      style={{
        border: '2px solid #ffe0ed',
        borderRadius: '16px',
        margin: '20px auto',
        padding: '24px',
        maxWidth: '600px',
        boxShadow: '0 8px 20px rgba(255, 182, 193, 0.2)',
        backgroundColor: '#fffafc',
        fontFamily: 'Poppins, sans-serif',
        color: '#333',
      }}
    >
      <h3 style={{ color: '#ff69b4', marginBottom: '10px' }}>{recipe.title}</h3>

      <img
        src={recipe.image}
        alt={recipe.title}
        width="100%"
        style={{
          borderRadius: '12px',
          marginBottom: '16px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        }}
      />

      <p style={{ fontSize: '15px' }}>
        <strong style={{ color: '#d63384' }}>Ready in:</strong>{' '}
        {recipe.readyInMinutes} minutes
      </p>

      <div style={{ marginTop: '12px' }}>
        <strong style={{ color: '#d63384' }}>Description:</strong>
        <p
          style={{ fontSize: '14.5px', lineHeight: '1.6', marginTop: '6px' }}
          dangerouslySetInnerHTML={{
            __html:
              recipe.summary?.split('. ').slice(0, 2).join('. ') + '.' ||
              'No description available.',
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Link to={`/recipe/${recipe.id}`}>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '15px',
              backgroundColor: '#ff80ab',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#ff5c99')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#ff80ab')}
          >
            View Full Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
