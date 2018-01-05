import React, { Component } from "react";
import "./index.css";

function Cards(props) {
    let { place, price, timeToGo } = props;
    let color;
    let backgroundColor;
    switch (timeToGo) {
        case "Summer":
            backgroundColor = "#ee5a29";
            break;
        case "Fall":
            backgroundColor = "#a77129";
            break;
        case "Winter":
            backgroundColor = "lightblue";
            color = "black";
            break;
        case "Spring":
            backgroundColor = "#82cf61";
            color = "#222";
            break;
    }
    let style = {backgroundColor: backgroundColor, color: color}
    return (
        <div className="cards" style = {style}>
            <h2>{place}</h2>
            <h3>Best time to go: {timeToGo}</h3>
            <h4>{price}</h4>
        </div>
    )
}

export default Cards;