import React from "react";
import { connect } from "react-redux";

function TimeDisplay(props) {
    return <h1>Time: {props.minutes}:{props.seconds}</h1>
}


export default connect(state => state, {})(TimeDisplay);