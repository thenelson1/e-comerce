import React from 'react'
import './callToAction.css';
import { SiFacebook, SiInstagram, SiTwitter, SiPinterest, SiYoutube } from 'react-icons/si';

import productOne from '../images/hero1.jpg'
import productTwo from '../images/hero2.jpg'
import productThree from '../images/hero3.jpg'


const CallToAction = () => {
  return (
    <div className='cta'>
        <div className="box follow-us">
          <h1>Follow Us</h1>
          <p className="desc">Be the first to know about our new arrivals and exclusive offers.</p>
          <div className="social-icons">
            <SiFacebook />
            <SiInstagram />
            <SiTwitter />
            <SiPinterest />
            <SiYoutube />
          </div>
        </div>

        <div className="box sign-up border">
          <h1>Sign Up Now & Get 10% Off</h1>
          <p className="desc">Be the first to know about our new arrivals and exclusive offers.</p>
          <div className="sub">
            <input className='input-box' type="text" placeholder='Your email address' />  
            <input className='send-btn' type="submit" value="Send" />
          </div>
        </div>

        <div className="box visit-store border">
          <h1>Visit Our Store</h1>
          <p className="desc">Be the first to know about our new arrivals and exclusive offers.</p>
          <div className="sub0">
            <a href="#" className="see-on-map">See On Map</a>
          </div>
        </div>
    </div>
  )
}

export default CallToAction