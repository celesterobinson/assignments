import React, {Component} from "react";
import "./index.css";
import Pet from "./Pet";

function Friend(props) {
    let {name, age, pets} = props

    return(
        <div className="friend-info">
            <h2>{name}</h2>
            <h2>{age}</h2>
            <div>
                {pets.map((pet) => {
                    return <Pet {...pet}></Pet>
                })}
            </div>
            
        </div>
    )
}

export default Friend;