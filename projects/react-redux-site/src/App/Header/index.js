import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <Link to="/">home</Link>
            <Link to="/lyrics">lyrics</Link>
            <Link to="/favorites">favorites</Link>
        </div>
    )
}

export default Header
