import React, {Component} from "react";
import "./index.css";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import github from "./images/github.png";

function Footer(props) {

    return (
        <div className="footer">
            <ul className="social-icons">
                <li>
                    <a href="twitter.com">
                        <img src={twitter} alt="Twitter Icon"/>
                    </a>
                </li>
                <li>
                    <a href="facebook.com">
                        <img src={facebook} alt="Facebook Icon"/>
                    </a>
                </li>
                <li>
                    <a href="github.com">
                        <img src={github} alt="Github Icon"/>
                    </a>
                </li>
            </ul>
            <h4>Copyright &copy; Your Website 2018</h4>
        </div>
    )
}

export default Footer;