import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  // Debug what's coming in from Spoonacular
  console.log('Recipe data:', recipe);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        margin: '20px auto',
        padding: '16px',
        maxWidth: '600px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h3>{recipe.title}</h3>

      <img
        src={recipe.image}
        alt={recipe.title}
        width="100%"
        style={{ borderRadius: '4px', marginBottom: '10px' }}
      />

      <p>
        <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
      </p>

      <div>
        <strong>Description:</strong>
        <p
          dangerouslySetInnerHTML={{
            __html:
              recipe.summary?.split('. ').slice(0, 2).join('. ') + '.' || 'No description available.'
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <Link to={`/recipe/${recipe.id}`}>
          <button style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}>
            View Full Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
