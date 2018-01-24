import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
import Footer from "./Footer";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics";

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
            <Main />
            <Footer />
        </div>
    )
}

export default App;