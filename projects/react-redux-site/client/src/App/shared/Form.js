import React, { Component } from 'react';
import {connect} from "react-redux";
import {getLyrics} from "../redux/track";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                track: "",
                artist: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getLyrics(this.state.inputs);
    }

    render() {
        let { track, artist } = this.state.inputs;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="track" value={track} placeholder="Track Title" type="text" /><br />
                    <input onChange={this.handleChange} name="artist" value={artist} placeholder="Artist" type="text" /><br />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default connect(null, ({getLyrics}))(Form);
