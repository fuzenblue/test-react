import React from 'react'
import '../Navbar/Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <Link to='/'><img src="../../../public/logo.png" alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#app-promo' onClick={()=>setMenu("About")} className={menu==="About"?"active":""}>About</a>
        <a href='#mobile-app' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src="../../../public/search-line.png" alt="" />
        <div className="navbar-search-icon">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
