import React from 'react';
import "../styles/Nav.css";

function Nav(Props) {
    return (
        <div className="nav">
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">music</a></li>
                <li><a href="#">video</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;