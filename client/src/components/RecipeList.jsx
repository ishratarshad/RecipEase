// src/components/RecipeList.jsx
import React from 'react';

const dummyRecipes = [
  {
    title: 'Quinoa Salad',
    ingredients: ['quinoa', 'cucumber', 'lemon'],
    instructions: 'Mix ingredients and chill for 30 mins.',
  },
  {
    title: 'Lentil Soup',
    ingredients: ['lentils', 'onion', 'carrots'],
    instructions: 'Simmer in pot for 40 mins.',
  },
];

const RecipeList = () => {
  return (
    <div>
      <h2>Recipes</h2>
      {dummyRecipes.map((recipe, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{recipe.title}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
