// src/App.js
import React from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>RecipEase 🍽️</h1>
      <RecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
