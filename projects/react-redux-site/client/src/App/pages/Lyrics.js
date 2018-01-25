import React from "react";
import { connect } from "react-redux";

function Lyrics(props) {
    let { title, artist, lyrics, album } = props;
    console.log(props.lyrics);
    return (
        <div className="main">
            <h2>{title}</h2>
            <h4>{artist}</h4>
            <h5>{album}</h5>
            <p>{lyrics}</p>
        </div>
    )
}

export default connect(state => state.track, {})(Lyrics);