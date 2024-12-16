import Header from './components/layout/header/Header'
import SearchPage from './pages/searchpage/SearchPage'
import Footer from './components/layout/footer/Footer'
import GlobalContext from './context/GlobalContext'
import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

export default function App() {
  const [moviesArray, setMoviesArray] = useState([]);
  const [seriesArray, setSeriesArray] = useState([]);
  const [movieIndex, setMovieIndex] = useState(0);
  const [serieIndex, setSerieIndex] = useState(0);

  return (
    <GlobalContext.Provider value={{ moviesArray, setMoviesArray, seriesArray, setSeriesArray, movieIndex, serieIndex, setMovieIndex, setSerieIndex }}>
      <Header />
      <SearchPage />
      <Footer />
    </GlobalContext.Provider>
  )
}
