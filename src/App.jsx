import './App.css'
import NavigationBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import CategoryPage from './pages/Category'
import FavoritesPage from '.pages/Favorites'
import HomePage from '.pages/Home'
import LoginPage from '.pages/Login'
import RecipePage from '.pages/Recipe'
import SearchResultPage from './pages/SearchResult'


function App() {


  return (
    <>
      <NavigationBar />
      <h1>🚧Under Construction🚧</h1>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='categories' element={ } />
        </Route>
      </Routes>
    </>
  )
}

export default App
