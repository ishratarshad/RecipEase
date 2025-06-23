import React, { useState } from 'react';

const RecipeForm = ({ onFilter }) => {
  const [allergies, setAllergies] = useState('');
  const [diet, setDiet] = useState('none');
  const [mealType, setMealType] = useState('any');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clean + validate allergies input
    const allergyArray = allergies
      .split(',')
      .map((a) => a.trim().toLowerCase())
      .filter((a) => a !== '');

    // Prevent completely empty submission
    const noInput =
      allergyArray.length === 0 &&
      (diet === 'none' || diet.trim() === '') &&
      (mealType === 'any' || mealType.trim() === '');

    if (noInput) {
      setError('Please enter at least one filter to search.');
      return;
    }

    if (allergies.trim() !== '' && allergyArray.length === 0) {
      setError('Please enter at least one valid allergy or leave blank.');
      return;
    }

    setError('');
    onFilter({ allergies: allergyArray, diet, mealType });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div>
        <label htmlFor="allergy">Dietary Restrictions / Allergies:</label>
        <input
          id="allergy"
          type="text"
          placeholder="e.g. nuts, gluten, dairy"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
          style={{ width: '300px', marginLeft: '10px' }}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label htmlFor="diet">Diet Type: </label>
        <select id="diet" value={diet} onChange={(e) => setDiet(e.target.value)}>
          <option value="none">No Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="gluten free">Gluten Free</option>
          <option value="ketogenic">Ketogenic</option>
        </select>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label htmlFor="mealType">Meal Type: </label>
        <select id="mealType" value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option value="any">Any</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" style={{ marginTop: '15px' }}>
        Find Recipes
      </button>
    </form>
  );
};

export default RecipeForm;
