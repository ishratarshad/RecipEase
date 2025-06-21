import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

function App() {
  const [filters, setFilters] = useState({
    allergies: [],
    diet: 'none',
    mealType: 'any'
  });

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!filters) return;
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch',
          {
            params: {
              diet: filters.diet !== 'none' ? filters.diet : undefined,
              intolerances: filters.allergies.join(',') || undefined,
              type: filters.mealType !== 'any' ? filters.mealType : undefined,
              addRecipeInformation: true,
              number: 6,
              apiKey: process.env.REACT_APP_SPOONACULAR_KEY
            }
          }
        );
        setRecipes(response.data.results || []);
      } catch (err) {
        setError('Failed to fetch recipes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [filters]);

  return (
    <Router>
      <div className="App">
        <h1>RecipEase</h1>
        <Routes>
          {/* NEW HOME ROUTE */}
          <Route path="/" element={<Home />} />

          {/* MOVED ORIGINAL FORM+LIST TO /search */}
          <Route
            path="/search"
            element={
              <>
                <RecipeForm onFilter={setFilters} />
                {loading && <p>Loading recipes...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <RecipeList recipes={recipes} />
              </>
            }
          />

          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
