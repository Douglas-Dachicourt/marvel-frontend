import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Characters from './pages/Characters'
import Home from './pages/Home'
import Header from './components/Header'
import './App.css'

function App() {


  return (
    <>



      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
        </Routes>
      </Router>




    </>
  )
}

export default App
