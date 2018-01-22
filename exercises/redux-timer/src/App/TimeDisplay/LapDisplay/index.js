import React from 'react';
import { connect } from "react-redux";

function LapDisplay(props) {
    let { laps } = props;
    return (
        <div>
            <h2>{laps}</h2>
        </div>
    )
}

export default connect(state => state, {})(LapDisplay);
