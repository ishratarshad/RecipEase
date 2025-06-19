import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
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
              <strong>Ingredients:</strong>{' '}
              {recipe.extendedIngredients?.length
                ? recipe.extendedIngredients.map((ing) => ing.original).join(', ')
                : 'No ingredients available.'}
            </p>

            <p>
              <strong>Instructions:</strong>{' '}
              {recipe.analyzedInstructions?.length > 0
                ? recipe.analyzedInstructions[0].steps.map((step) => step.step).join(' ')
                : 'No instructions available.'}
            </p>

            {recipe.sourceUrl && (
              <p>
                <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                  View full recipe
                </a>
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
