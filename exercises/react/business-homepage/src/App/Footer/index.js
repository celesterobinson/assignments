import React from 'react';
import "../styles/Footer.css";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";


function Footer(Props) {
    return (
        <div className="footer">
            <ul>
                <li><a href="https://www.facebook.com/thesaltlakecity7/"><img src={Facebook} alt="Facebook"/></a></li>
                <li><a href="https://www.instagram.com/saltlakecity7/"><img src={Instagram} alt="Instagram"/></a></li>
                <li><a href="https://twitter.com/SLC7jazz"><img src={Twitter} alt="Twitter"/></a></li>
            </ul>
            <h3>Copyright &copy;2018</h3>
        </div>
    )
}

export default Footer;