import React, {Component} from "react";
import "./index.css";

function SuperHero(props) {
    let {name, imageUrl, caption, displayCatchphrase} = props;

    return(
        <div onClick={() => displayCatchphrase(caption)}className="superhero">
                <h1>{name}</h1>
            <div className="image">
                <img src={imageUrl} alt={name}/>
            </div>
        </div>
    )
}

export default SuperHero;