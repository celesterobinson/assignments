import React from 'react';
import "./styles/Person.css";

function Person(props) {
    let {name, image} = props;
    let style = {backgroundImage: `url(${image})`};
    return (
        <div className="person"style={style}>
            <h1>{name}</h1>
        </div>
    )
}

export default Person;
