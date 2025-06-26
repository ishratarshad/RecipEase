import React, { useEffect, useRef } from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes = [] }) => {
  const firstRecipeRef = useRef(null);
  const prevRecipeCount = useRef(recipes.length);
  const hasMounted = useRef(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    hasMounted.current = true;
  }, []);

  useEffect(() => {
    if (hasMounted.current) {
      if (prevRecipeCount.current === 0 && recipes.length > 0) {
        setTimeout(() => {
          firstRecipeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
      prevRecipeCount.current = recipes.length;
    }
  }, [recipes.length]); 

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff8fb',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <h2 style={{
        color: '#ff69b4',
        fontSize: '28px',
        marginBottom: '20px'
      }}>
        Recipes
      </h2>

      {recipes.length === 0 ? (
        <p style={{ color: '#999', fontSize: '16px' }}>No matching recipes found.</p>
      ) : (
        recipes.map((recipe, index) => (
          <div
            key={recipe.id}
            ref={index === 0 ? firstRecipeRef : null}
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
