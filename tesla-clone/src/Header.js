import React from 'react'
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <div className="header--left">
                <img src="https://automoteve.com/wp-content/uploads/2020/04/Tesla-Name.png" alt="TESLA"></img>
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
                    <li>    
                        <a href="shop">Shop</a>
                    </li>
                    <li>
                        <a href="account">Account</a>
                    </li>
                    <li>
                        <a href="menu">Menu</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
