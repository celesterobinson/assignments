import React, { Component } from "react";
import FriendList from "./FriendList";
import Header from "./Header";
import "./index.css";

function App(props) {

    return (
        <div className="app-wrapper">
            <Header></Header>
            <FriendList></FriendList>
        </div>
    )
}

export default App;