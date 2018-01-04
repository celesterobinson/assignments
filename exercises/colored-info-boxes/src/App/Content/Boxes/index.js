import React, {Component} from "react";
import "./index.css";

function Boxes(props) {
    let {name, status, bio, backgroundColor, color} = props;
    let style1 = {backgroundColor: backgroundColor, color: color}
    return (
        <div style = {style1}>
            <h1>{name}</h1>
            <h3>{status}</h3>
            <p>{bio}</p>
        </div>
    )
}

export default Boxes;

