import React from "react";
import { connect } from "react-redux";
import LapDisplay from "./LapDisplay";

function TimeDisplay(props) {
    const styles = {
        textAlign: "center",
        marginBottom: 0,
        fontSize: "10em"
    }
    const minutes = props.minutes < 10 ? `0${props.minutes}` : props.minutes;
    const seconds = props.seconds < 10 ? `0${props.seconds}` : props.seconds;
    const currTime = `${minutes}:${seconds}`;
    const lapTime = props.laps.map((lapDisplay, i) => {
        return <LapDisplay key={i} {...lapDisplay} minutes={minutes} seconds={seconds}></LapDisplay>
    })
    return (
        <div>
            <h1 style={styles}>{currTime}</h1>
            <h2>{lapTime}</h2>
        </div>
    )
}


export default connect(state => state, {})(TimeDisplay);