import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto accusantium incidunt, illum ut eius quibusdam aperiam doloremque, consectetur molestiae aspernatur perspiciatis labore deleniti ipsum?</p>
            <div className="footer-social-icons">
                <img src="../../../public/facebook_icon.png" alt="" />
                <img src="../../../public/twitter_icon.png" alt="" />
                <img src="../../../public/linkedin_icon.png" alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Our Session</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-224-236</li>
                <li>contact@fuzenblue.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">Copyright 2024 © Test-React.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
