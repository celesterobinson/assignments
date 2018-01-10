import React from "react";
import Header from "../../Header";
import "./Home.css";

function Home(props) {
    return (
        <div className="home">
            <Header brand="Fudge Free Plumbing" slogan="Don't be afraid to induldge."/>
            <h3>PLUMBERS YOU CAN TRUST.</h3>
        </div>
    )
}

export default Home;