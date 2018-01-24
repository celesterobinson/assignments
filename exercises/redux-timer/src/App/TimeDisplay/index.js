import React from "react";
import { connect } from "react-redux";

function TimeDisplay(props) {
    const styles = {
        textAlign: "center",
        marginBottom: 0,
        fontSize: "10em"
    }
    const minutes = props.minutes < 10 ? `0${props.minutes}` : props.minutes;
    const seconds = props.seconds < 10 ? `0${props.seconds}` : props.seconds;
    const currTime = `${minutes}:${seconds}`;
    const lapTime = props.laps.map((lap, i) => {
        return <h6 key={i} >{lap}</h6>
    })
    console.log(props.laps);
    return (
        <div>
            <h1 style={styles}>{currTime}</h1>
            <div>{lapTime}</div>
        </div>
    )
}


export default connect(state => state, {})(TimeDisplay);