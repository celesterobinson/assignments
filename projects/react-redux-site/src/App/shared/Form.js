import React, { Component } from 'react';
import axios from "axios";
const lyricUrl = "https://api.musixmatch.com/ws/1.1/track.search?apikey=e14650003ae32bc2229f9573c5408897";

class Form extends Component {
    constructor(props) {
        let {title, artist, genre} = props;
        super(props);
        this.state = {
            inputs: {
                title: title || "",
                artist: artist || "",
                genre: genre || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let {name, value } = e.target;
        this.setState((prevState)=>{
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    render() {
        let {title, artist, genre} = this.state.inputs;
        return (
            <div>
                <form>
                    <input onChange={this.handleChange} name="title" value={title} placeholder="Track Title" type="text" /><br />
                    <input onChange={this.handleChange} name="artist" value={artist} placeholder="Artist" type="text" /><br />
                    <input onChange={this.handleChange} name="genre" value={genre} placeholder="Genre" type="text" /><br />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Form;
