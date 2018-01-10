import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../App/pages/Home/";
import About from "../App/pages/About/";
import Services from "../App/pages/Services/";
import Service from "../App/pages/Service/";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App(props) {
    return (
        <div className="app-wrapper">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;