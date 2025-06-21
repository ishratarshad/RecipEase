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

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!recipe) return <p>Loading recipe...</p>;

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '20px',
          padding: '8px 16px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      >
        ← Back to Recipes
      </button>

      <h2>{recipe.title}</h2>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
      />

      <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map((ing, index) => (
          <li key={index}>{ing.original}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      {recipe.analyzedInstructions?.length > 0 ? (
        <ol>
          {recipe.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))}
        </ol>
      ) : (
        <p>No instructions available.</p>
      )}

      {/* Video Embed if available */}
      {recipe.spoonacularSourceUrl &&
        recipe.spoonacularSourceUrl.includes('youtube.com') && (
          <div style={{ marginTop: '20px' }}>
            <h3>Video Tutorial</h3>
            <iframe
              width="100%"
              height="315"
              src={recipe.spoonacularSourceUrl.replace('watch?v=', 'embed/')}
              title="Video Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

      {recipe.sourceUrl && (
        <p style={{ marginTop: '20px' }}>
          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
            View source recipe
          </a>
        </p>
      )}
    </div>
  );
};

export default RecipeDetail;
