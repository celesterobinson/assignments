import React, { Component } from "react";
import "./index.css";

function Cards(props) {
    let { place, price, timeToGo } = props;
    let color;
    switch (timeToGo) {
        case "Summer":
            color = "orange";
            break;
        case "Fall":
            color = "brown";
            break;
        case "Winter":
            color = "lightblue";
            break;
        case "Spring":
            color = "green";
            break;
    }
    let style = {backgroundColor: color}
    return (
        <div style = {style}>
            <h2>{place}</h2>
            <h4>{price}</h4>
            <h3>{timeToGo}</h3>
        </div>
    )
}

export default Cards;