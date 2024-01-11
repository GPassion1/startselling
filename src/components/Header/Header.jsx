import React from "react";
import './Header.css'
import logo_hor_sf from '../assets/logo_hor_sf.png'

const Header = () => {
    return (
        <div className="header__container">
            <div className="logo">
                <img src={logo_hor_sf} alt="" />
            </div>
        </div>
    )
}

export default Header