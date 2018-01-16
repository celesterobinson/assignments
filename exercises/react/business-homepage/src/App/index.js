import React from 'react';

import "./styles/App.css";
import Header from "./Header";
import Nav from "./Nav";
import Info from "./Info";
import Footer from "./Footer";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Nav></Nav>
            <Info></Info>
            <Footer></Footer>
        </div>
    )
}

export default App;
