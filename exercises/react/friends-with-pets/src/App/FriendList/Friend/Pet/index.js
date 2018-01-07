import React, {Component} from "react";
import "./index.css";

function Pet(props) {
    return (
        <div className="pets">
            <h3>{props.name}: {props.breed}</h3>
        </div>
    )
}

export default Pet;