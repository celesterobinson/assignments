import React from "react";
import Form from "./shared/Form";
import Posts from "./Posts";

import "./styles/App.css";

function App(props) {
    return (
        <div className="app-wrapper">
            <Form add clear></Form>
            <Posts></Posts>
        </div>
    )
}

export default App;