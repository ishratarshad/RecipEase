import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
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
        <Navbar />

        <Routes>
          {/* Home page with welcome and image slideshow */}
          <Route path="/" element={<Home />} />

          {/* About page */}
          <Route path="/about" element={<About />} />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* Search page with filters and recipe results */}
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

          {/* Single recipe detail */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
