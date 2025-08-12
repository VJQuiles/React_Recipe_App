import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import CategoryPage from './pages/Category'
import CategoryDetailPage from './pages/CategoryDetail'
import FavoritesPage from './pages/Favorites'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RecipeDetail from './pages/RecipeDetail'
import SearchResultPage from './pages/SearchResult'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='categories' element={<CategoryPage />} />
          <Route path='categories/:slug' element={<CategoryDetailPage />} />
          <Route path='recipes/:slug' element={<RecipeDetail />} />
          <Route path='search-results' element={<SearchResultPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
