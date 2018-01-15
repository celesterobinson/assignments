import React from 'react';
import {Link} from "react-router-dom";
import "./styles/Header.css";
import Don from "./images/don.jpg"

function Header(props) {
    return (
        <div className="header">
            <img src={Don} alt="Don Corleone"/>
            <Link to="/"><h1>Don Corleone's Hit List</h1></Link>
        </div>
    )
}

export default Header;
