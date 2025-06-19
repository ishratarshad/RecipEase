// src/components/RecipeList.jsx
import React from 'react';

const dummyRecipes = [
  {
    title: 'Quinoa Salad',
    ingredients: ['quinoa', 'cucumber', 'lemon'],
    diet: 'low-carb',
    mealType: 'lunch',
    instructions: 'Mix ingredients and chill for 30 mins.',
  },
  {
    title: 'Lentil Soup',
    ingredients: ['lentils', 'onion', 'carrots'],
    diet: 'low-sugar',
    mealType: 'dinner',
    instructions: 'Simmer in pot for 40 mins.',
  },
  {
    title: 'Peanut Butter Cookies',
    ingredients: ['peanut butter', 'sugar', 'eggs'],
    diet: 'none',
    mealType: 'breakfast',
    instructions: 'Mix and bake at 350°F for 10 minutes.',
  },
];

const RecipeList = ({ filters }) => {
  const isSafe = (recipe) => {
    const { allergies, diet, mealType } = filters;

    // Check allergies
    if (
      allergies.length > 0 &&
      allergies.some((filter) =>
        recipe.ingredients.join(' ').toLowerCase().includes(filter)
      )
    ) {
      return false;
    }

    // Check diet
    if (diet !== 'none' && recipe.diet !== diet) {
      return false;
    }

    // Check meal type
    if (mealType !== 'any' && recipe.mealType !== mealType) {
      return false;
    }

    return true;
  };

  const filteredRecipes = dummyRecipes.filter(isSafe);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No matching recipes found for your preferences.</p>
      ) : (
        filteredRecipes.map((recipe, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Diet:</strong> {recipe.diet}</p>
            <p><strong>Meal Type:</strong> {recipe.mealType}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
