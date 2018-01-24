import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics";

function App(props) {
    return (
        <div className="app-wrapper">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/lyrics" component={Lyrics}/>
                <Route path="/favorites" component={Favorites}/>
            </Switch>
            <Aside />
        </div>
    )
}

export default App;