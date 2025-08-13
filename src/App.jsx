import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import CategoryPage from './pages/Category'
import FavoritesPage from './pages/Favorites'
import HomePage from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import SearchResultPage from './pages/SearchResult'
import NotFoundPage from './pages/NotFoundPage'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='categories' element={<CategoryPage />} />
          <Route path='recipes/:slug' element={<RecipeDetail />} />
          <Route path='search' element={<SearchResultPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
