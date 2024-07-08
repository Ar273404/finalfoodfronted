import React from 'react'
import { asset } from '../../assets/frontend_assets/asset'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={asset.logo} alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae autem ad aperiam reiciendis sint laboriosam accusamus facere culpa ea voluptatibus!</p>
            <div className='footer-social-icons'>
                <img src={asset.facebook_icon} alt=''/>
                <img src={asset.twitter_icon} alt=''/>
                <img src={asset.linkedin_icon} alt=''/>
            </div>
        </div>
        <div className='footer-content-center'>
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
        </div>
        <div className='footer-content-right'>
         <h2>GET IN TOUCH</h2>
         <ul>
            <li>+91-8306708169</li>
            <li>arun@gmail.com</li>
         </ul>
        </div>
      </div>
          <hr/>
    </div>
  )
}

export default Footer