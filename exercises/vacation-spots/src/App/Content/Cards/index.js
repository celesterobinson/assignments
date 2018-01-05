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
        <div className="cards" style = {style}>
            <h2>{place}</h2>
            <h3>Best time to go: {timeToGo}</h3>
            <h4>{price}</h4>
        </div>
    )
}

export default Cards;