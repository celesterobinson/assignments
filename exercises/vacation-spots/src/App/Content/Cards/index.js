import React, { Component } from "react";
import "./index.css";

function Cards(props) {
    let { place, price, timeToGo } = props;
    let color;
    let backgroundColor;
    let dollarSigns;
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
    if(price < 500) {
        dollarSigns = '$';
    } else if (price < 1000) {
        dollarSigns = '$$';
    } else if (price > 1000) {
        dollarSigns = '$$$';
    }

    let style = {backgroundColor: backgroundColor, color: color}
    return (
        <div className="cards" style = {style}>
            <h2>{place} | {dollarSigns}</h2>
            <h3>Best time to go: {timeToGo}</h3>
            <h4>{price}</h4>
        </div>
    )
}

export default Cards;