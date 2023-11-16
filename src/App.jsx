import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Characters from './pages/Characters'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Comics from './pages/Comics'
import './App.css'

function App() {


  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/comics' element={<Comics />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
