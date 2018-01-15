import React from "react";

import Header from "./Header";
import PeopleList from "./PeopleList";
import "./styles/App.css"


function App(props) {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <PeopleList></PeopleList>
        </div>
    )
}

export default App;