import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey: process.env.REACT_APP_SPOONACULAR_KEY
            }
          }
        );
        setRecipe(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load recipe details.');
      }
    };

    fetchDetails();
  }, [id]);

  if (error) return <p style={{ color: '#ff4d6d' }}>{error}</p>;
  if (!recipe) return <p style={{ fontFamily: 'Poppins, sans-serif' }}>Loading recipe...</p>;

  return (
    <div style={{
      maxWidth: '750px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#fff0f6',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(255, 182, 193, 0.15)',
      fontFamily: 'Poppins, sans-serif',
      color: '#333'
    }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '25px',
          padding: '10px 18px',
          fontSize: '15px',
          cursor: 'pointer',
          backgroundColor: '#ffc0cb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#ff91a4'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#ffc0cb'}
      >
        ← Back to Recipes
      </button>

      <h2 style={{ color: '#ff69b4', marginBottom: '10px' }}>{recipe.title}</h2>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: '100%',
          borderRadius: '12px',
          marginBottom: '20px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}
      />

      <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>

      <h3 style={{ marginTop: '24px', color: '#d63384' }}>Ingredients</h3>
      <ul style={{ textAlign: 'left', lineHeight: '1.7' }}>
        {recipe.extendedIngredients.map((ing, index) => (
          <li key={index}>{ing.original}</li>
        ))}
      </ul>

      <h3 style={{ marginTop: '24px', color: '#d63384' }}>Instructions</h3>
      {recipe.analyzedInstructions?.length > 0 ? (
        <ol style={{ textAlign: 'left', lineHeight: '1.7' }}>
          {recipe.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))}
        </ol>
      ) : (
        <p>No instructions available.</p>
      )}

      {recipe.spoonacularSourceUrl &&
        recipe.spoonacularSourceUrl.includes('youtube.com') && (
          <div style={{ marginTop: '30px' }}>
            <h3 style={{ color: '#d63384' }}>Video Tutorial</h3>
            <iframe
              width="100%"
              height="315"
              src={recipe.spoonacularSourceUrl.replace('watch?v=', 'embed/')}
              title="Video Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '8px', marginTop: '10px' }}
            ></iframe>
          </div>
        )}

      {recipe.sourceUrl && (
        <p style={{ marginTop: '24px' }}>
          <a
            href={recipe.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ff69b4', textDecoration: 'underline' }}
          >
            View source recipe
          </a>
        </p>
      )}
    </div>
  );
};

export default RecipeDetail;
