import React, {Component} from "react";
import "./index.css";

function Navbar(props) {

    return (
        <div className="navbar">
            <h2><a href="#">Start Bootstrap</a></h2>
            <ul className="nav-links">
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">SAMPLE POST</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </div>
    )
}

export default Navbar;