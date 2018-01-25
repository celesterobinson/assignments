import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";
// import Main from "./Components/Main";
import Favorites from "./pages/Favorites.js";
import Home from "./pages/Home.js";
import Lyrics from "./pages/Lyrics.js";

import "./styles/App.css";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/lyrics" component={Lyrics}/>
                <Route path="/favorites" component={Favorites}/>
            </Switch>
            <Aside />
            <Footer />
        </div>
    )
}

export default App;