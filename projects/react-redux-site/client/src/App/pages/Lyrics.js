import React from "react";
import { connect } from "react-redux";
import Aside from "../Components/Aside";
import "../styles/Lyrics.css";

function Lyrics(props) {
    let { title, artist, lyrics, album } = props;
    console.log(props.lyrics);
    return (
        <div className="lyrics">
            <Aside />
            <div className="lyrics-display">
                <h2>{title}</h2>
                <h4>{artist}</h4>
                <h5>{album}</h5>
                <p>{lyrics}</p>
            </div>
        </div>
    )
}

export default connect(state => state.track, {})(Lyrics);