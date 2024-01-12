import React from 'react'
import './Footer.css'
import logo_dark from '../assets/logo_hor_sf.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pinterest_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
		<div className="footer">
			<div className="footer-logo">
				<img src={logo_dark} alt="" />
			</div>
			<div className="footer-social-icons">
				<div className="footer-icons-container">
					<a href="#"><img src={instagram_icon} alt="" /></a>
				</div>
				<div className="footer-icons-container">
					<a href="https://wa.me/+5521990828161" target='blank'> <img src={pinterest_icon} alt="" /></a>
				</div>
          </div>
          <div className="footer-copyright">
              <hr />
              <p>SS Group 2024© - All Rights Reserved</p>
          </div>
		</div>
	)
}

export default Footer
