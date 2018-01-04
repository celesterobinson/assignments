import React, {Component} from "react";
import Content from "./Content";

function App(props) {
    
    return (
        <div className="app=wrapper">
            <h1>Welcome to {props.name}</h1>
            <h2>Founded by {props.founder}</h2>
        <Content backgroundColor = "blue"></Content>
        </div>
    )
}

export default App;