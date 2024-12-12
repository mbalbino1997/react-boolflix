import Header from './components/layout/header/Header'
import SearchPage from './pages/searchpage/SearchPage'
import Footer from './components/layout/footer/Footer'
import GlobalContext from './context/GlobalContext'
import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

export default function App() {
  const [moviesArray, setMoviesArray] = useState([]);
  const BASE_URI = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "3ddebe04883de61a2570f2eb4a6c7c21";
  function fetchData() {
    axios.get(BASE_URI, {
      params: {
        api_key: API_KEY,
        query: "harry potter",
        language: "it"
      },
    }).then((res) => {
      setMoviesArray(res.data.results);
      console.log(res.data.results);

    }).catch((err) => { console.error(err.message); })
  }
  useEffect(() => {
    fetchData();

  }, [])
  return (
    <GlobalContext.Provider value={{ fetchData, moviesArray, setMoviesArray }}>
      <Header />
      <SearchPage />
      <Footer />
    </GlobalContext.Provider>
  )
}
