import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SearchRecipe } from './pages/SearchRecipe';
import { RecipeDetails } from './pages/RecipeDetails';
import { Favourites } from './pages/Favourites';

function App() {
    
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='search' element={<SearchRecipe/>}/>
      <Route path='recipes' element={<RecipeDetails/>}/>
      <Route path='favourites' element={<Favourites/>}/>
      <Route path='*' element='Not found 404'/>
    </Routes>
  )
}

export default App
