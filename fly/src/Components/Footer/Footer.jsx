import React from 'react'

//import Images

import Logo from '../../assets/logoair.png'

//import icons
import {TiSocialFacebook} from 'react-icons/ti'
import {FaPinterestP} from 'react-icons/fa'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={Logo}className='Logo'/>
          </div>
          <p>Your mind should be higher than your feelings, fly high!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <FaPinterestP className='icon'/>
          </div>
        </div>

        <div className="footerlinks">
              <span className="linkTitle">Information</span>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Flight status</a>
              </li>
              <li>
                <a href="">Travel</a>
              </li>
              <li>
                <a href="">Check-In</a>
              </li>
              <li>
                <a href="">Manage your booking</a>
              </li>
          </div>

          
        <div className="footerlinks">
          <span className="linkTitle">Quick guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route map</a>
          </li>
          <li>
            <a href="">Our communities</a>
          </li>
        </div>
        
       
        
        <div className="footerlinks">
          <span className="linkTitle">Quick guide</span>
          <li>
            <a href="">Chauffer</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programme Rules</a>
          </li>
        </div>

      </div>


      <div className="copyRightDiv flex">
        <p>
          Developed by Gaurav Rawat <a href="https://emailto-gokurawat936@gmail.com"
          target='blank'>Arashi</a>
        </p>
      </div>
    </div>
  )
}
