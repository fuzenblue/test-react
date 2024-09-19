import React from 'react'
import './Home.css'
import Header from '../components/Header/Header'
import GetApp from '../components/GetApp/GetApp'
import AppPromo from '../components/AppPromo/AppPromo'

const Home = () => {
  return (
    <div>
      <Header />
      <AppPromo />
      <GetApp />
    </div>
  )
}

export default Home
