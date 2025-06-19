// src/components/RecipeForm.jsx
import React, { useState } from 'react';

const RecipeForm = ({ onFilter }) => {
  const [allergies, setAllergies] = useState('');
  const [diet, setDiet] = useState('none');
  const [mealType, setMealType] = useState('any');

  const handleSubmit = (e) => {
    e.preventDefault();

    const allergyList = allergies
      .toLowerCase()
      .split(',')
      .map(item => item.trim())
      .filter(Boolean);

    onFilter({
      allergies: allergyList,
      diet,
      mealType,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Dietary Restrictions / Allergies:
          <input
            type="text"
            value={allergies}
            placeholder="e.g. nuts, gluten, dairy"
            onChange={(e) => setAllergies(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Diet Type:
          <select value={diet} onChange={(e) => setDiet(e.target.value)}>
            <option value="none">No Diet</option>
            <option value="low-carb">Low Carb</option>
            <option value="low-sugar">Low Sugar</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Meal Type:
          <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
            <option value="any">Any</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </label>
      </div>

      <button type="submit">Find Recipes</button>
    </form>
  );
};

export default RecipeForm;
