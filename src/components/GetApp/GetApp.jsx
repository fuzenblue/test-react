import React from 'react'
import './GetApp.css'

const GetApp = () => {
  return (
    <div className='app-download' id='mobile-app'>
      <p>For Better Experience Download <br />Test App</p>
      <div className="app-download-platforms">
        <img src="../../../public/app_store.png" alt="" />
        <img src="../../../public/play_store.png" alt="" />
      </div>
    </div>
  )
}

export default GetApp
