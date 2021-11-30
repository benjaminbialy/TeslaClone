import React from 'react'
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <div className="header--left">
                <a href="localhost:3000">
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="TESLA"></img>
                </a>
            </div>
            <div className="header--middle">
                <ul className="header--middle--list">
                    <li className="vehicles">
                        <a href="models">Model S</a>
                    </li>
                    <li className="vehicles">
                        <a href="model3">Model 3</a>
                    </li>
                    <li className="vehicles">
                    <a href="modelx">Model X</a>
                    </li>
                    <li className="vehicles">
                    <a href="modely">Model Y</a>
                    </li>
                    <li className="vehicles">
                    <a href="cybertruck">Cybertruck</a>
                    </li>
                    <li className="vehicles">
                    <a href="powerwall">Powerwall</a>
                    </li>
                </ul>
            </div>
            <div className="header--right">
                <ul className="header--right--list">
                    <li className="header--right--list--items">    
                        <a href="shop">Shop</a>
                    </li>
                    <li className="header--right--list--items">
                        <a href="account">Account</a>
                    </li>
                    <li className="header--right--list--items">
                        <a href="menu">Menu</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
