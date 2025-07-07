import React, { useState } from 'react';

const RecipeForm = ({ onFilter }) => {
  const [allergies, setAllergies] = useState('');
  const [diet, setDiet] = useState('none');
  const [mealType, setMealType] = useState('any');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const allergyArray = allergies
      .split(',')
      .map((a) => a.trim().toLowerCase())
      .filter((a) => a !== '');

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
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#fff0f5',
        borderRadius: '15px',
        padding: '30px',
        margin: '40px auto',
        width: '85%',
        maxWidth: '600px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        fontFamily: 'Poppins, sans-serif',
        color: '#333',
      }}
    >
      <h2 style={{ color: '#ff69b4', marginBottom: '20px' }}>Filter Your Recipes and Scroll Down: </h2>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="allergy" style={{ fontWeight: '500' }}>
          Dietary Restrictions / Allergies:
        </label>
        <input
          id="allergy"
          type="text"
          placeholder="e.g. nuts, gluten, dairy"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
          style={{
            width: '96%',
            marginTop: '8px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            backgroundColor: '#fffafd',
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="diet" style={{ fontWeight: '500' }}>Diet Type:</label>
        <select
          id="diet"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          style={{
            width: '100%',
            marginTop: '8px',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            backgroundColor: '#fffafd',
          }}
        >
          <option value="none">No Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="gluten free">Gluten Free</option>
          <option value="ketogenic">Ketogenic</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="mealType" style={{ fontWeight: '500' }}>Meal Type:</label>
        <select
          id="mealType"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          style={{
            width: '100%',
            marginTop: '8px',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            backgroundColor: '#fffafd',
          }}
        >
          <option value="any">Any</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      {error && (
        <p style={{ color: '#ff4d6d', fontWeight: '500', marginBottom: '15px' }}>{error}</p>
      )}

      <button
        type="submit"
        style={{
          backgroundColor: '#ff80ab',
          color: '#fff',
          padding: '12px 20px',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '16px',
          marginTop: '10px',
        }}
      >
        Find Recipes
      </button>
    </form>
  );
};

export default RecipeForm;
