import React, {Component} from "react";
import BlogList from "./BlogList";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";

function App(props) {

    return (
        <div className="app-wrapper">
            <Header></Header>
            <BlogList></BlogList>
            <Footer></Footer>
        </div>
    )
}

export default App;