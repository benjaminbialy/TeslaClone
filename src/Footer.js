import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className="footer">
            <ul className="footer--list">
                <li className="footer--list--items">
                    <a href="about">Tesla &copy; 2021</a>
                </li>
                <li className="footer--list--items">
                    <a href="legal">Privacy 	&#38; Legal</a>
                </li>
                <li className="footer--list--items">
                    <a href="support/model-s-safety-update">Recall Info</a>
                </li>
                <li className="footer--list--items">
                    <a href="contact">Contact</a>
                </li>
                <li className="footer--list--items">
                    <a href="careers">Careers</a>
                </li>
                <li className="footer--list--items">
                    <a href="blog">News</a>
                </li>
                <li className="footer--list--items">
                    <a href="findus/list">Locations</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer
