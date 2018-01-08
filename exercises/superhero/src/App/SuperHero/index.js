import React, {Component} from "react";

function SuperHero(props) {
    let {name, imageUrl, caption, displayCatchphrase} = props;

    return(
        <div onClick={() => displayCatchphrase(caption)}className="superhero">
            <h1>{name}</h1>
            <div>
                <img src={imageUrl} alt=""/>
            </div>
        </div>
    )
}

export default SuperHero;