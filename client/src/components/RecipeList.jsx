import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes = [] }) => {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      )}
    </div>
  );
};

export default RecipeList;
