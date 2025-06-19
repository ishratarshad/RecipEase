// src/components/RecipeForm.jsx
import React, { useState } from 'react';

const RecipeForm = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for recipes that avoid: ${input}`);
    // Later: pass input to filter recipes
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dietary Preferences / Allergies:
        <input
          type="text"
          value={input}
          placeholder="e.g. gluten, nuts"
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button type="submit">Find Recipes</button>
    </form>
  );
};

export default RecipeForm;
