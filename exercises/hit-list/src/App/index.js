import React from "react";
import Header from "./Header";
import PeopleToDie from "./PeopleToDie";
import PersonToDie from "./PeopleToDie/PersonToDie";

import {Switch, Route, Link} from "react-router-dom";

function App(props) {
    return (
        <div>
            <Header></Header>
            <PeopleToDie></PeopleToDie>
        </div>
    )
}

export default App;