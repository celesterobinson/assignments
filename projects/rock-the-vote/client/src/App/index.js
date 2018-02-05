import React from 'react';
import Form from "./shared/Form";
import IssueList from "./IssueList";
import Navbar from "./Navbar";

import "./styles/App.css";


function App(props) {
    return (
        <div className="app-wrapper">
            <Navbar />
            <Form add clear/>
            <IssueList />
        </div>
    )
}

export default App;
