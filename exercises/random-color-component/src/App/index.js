import React, { Component } from 'react';
import axios from "axios";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        let { backgroundColor } = props;
        this.state = {
            backgroundColor: backgroundColor
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
            axios.get("http://www.colr.org/json/color/random")
            .then(response => {
                this.setState({
                    backgroundColor: `#${response.data.new_color}`
                });
            })
    }
    render() {
        const style = {height: "100vh", width: "100vw", backgroundColor: this.state.backgroundColor}
        return (
            <div className="app-wrapper" style={style}>
                <h1>{this.state.backgroundColor}</h1>
                <button onClick={this.handleSubmit}>Click Me</button>
            </div>
        )
    }
}

export default App;