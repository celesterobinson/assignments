import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
           <Link to="/"><h1>Don Corleone's Hit List</h1></Link>
        </div>
    )
}

export default Header;
