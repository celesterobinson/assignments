import React from "react"
import { connect } from "react-redux"

function Timer(props) {
    const styles = {
        textAlign: "center",
        marginTop: "300px",
        marginBottom: 0,
        fontSize: "10em"
    }

    const minutes = props.minutes < 10 ? `0${props.minutes}` : props.minutes;
    const seconds = props.seconds < 10 ? `0${props.seconds}` : props.seconds;

    return <h1 style={styles}>{minutes}:{seconds}</h1>
}
export default connect(state => state, {})(Timer);