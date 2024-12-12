import Header from './components/layout/header/Header'
import SearchPage from './pages/searchpage/SearchPage'
import Footer from './components/layout/footer/Footer'
import GlobalContext from './context/GlobalContext'
import axios from 'axios'
import './App.css'

export default function App() {

  return (
    <GlobalContext.Provider value={{}}>
      <Header />
      <SearchPage />
      <Footer />
    </GlobalContext.Provider>
  )
}
