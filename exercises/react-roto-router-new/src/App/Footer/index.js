import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";

function Footer(props) {
    return (
        <div className="footer">
            <ul className="social">
                <li><a href="facebook.com"><img src={facebook} alt="Facebook Icon"/></a></li>
                <li><a href="instagram.com"><img src={instagram} alt="Instagram Icon"/></a></li>
                <li><a href="twitter.com"><img src={twitter} alt="Twitter Icon"/></a></li>
            </ul>
            <p>Copyright &copy; 2018 Fudge Free Plumbing</p>
        </div>
    )
}

export default Footer;