import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    allergies: [],
    diet: 'none',
    mealType: 'any',
  });

  return (
    <div className="App">
      <h1>RecipEase</h1>
      <RecipeForm onFilter={setFilters} />
      <RecipeList filters={filters} />
    </div>
  );
}

export default App;
