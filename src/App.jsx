import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
        <Footer />
    </>
  )
}

export default App
