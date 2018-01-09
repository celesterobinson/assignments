import React, { Component } from "react";
import "./index.css";
import SuperHero from "./SuperHero";
import heros from "../shared/superheros.json";
import starlord from "../images/starlord.jpeg"
import strange from "../images/strange.jpg"
import wonder from "../images/wonder.jpeg"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heros: heros,
            images: [starlord, strange, wonder]
        }
        this.displayCatchphrase = this.displayCatchphrase.bind(this);
    }
    

    displayCatchphrase(caption) {
        alert(caption);
    }
    render() {
        let { heros, images } = this.state;
        return (
            <div className="app-wrapper">
                <h1>Superhero Stuff</h1>
                {heros.map((hero, index) => {
                    return <SuperHero displayCatchphrase={this.displayCatchphrase} imageUrl={images[index]} {...hero}></SuperHero>
                })}
            </div>
        )
    }
}

export default App;