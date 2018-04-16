import React, { Component } from "react"
import { connect } from "react-redux"
import { addSecond, reset } from "../redux";

class Controls extends Component {
    constructor() {
        super();
        this.state = {
            intervalId: null
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
        const id = setInterval(this.props.addSecond, 1000);
        this.setState({
            intervalId: id
        });
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.setState({
            intervalId: null
        });
    }

    resetTimer() {
        this.stopTimer();
        this.props.reset();
    }

    render() {
        const divStyles = {
            textAlign: "center"
        }
        const buttonStyles = {
            width: "20%",
            height: "100px",
            fontSize: "2em",
            color: "whitesmoke",
            backgroundColor: "#4AC26A",
            border: "none",
            cursor: "pointer",
            marginTop: "10px"
        }

        const startOrStopButton = this.state.intervalId ?
            <div>
                <button
                    onClick={this.stopTimer}
                    style={{ ...buttonStyles, backgroundColor: "#C2421A" }}>Stop
                </button>
                <br />
                <button
                    onClick={this.resetTimer}
                    style={{ ...buttonStyles, backgroundColor: "#737070" }}>Reset
                </button>
            </div>
            :
            <button
                onClick={this.startTimer}
                style={buttonStyles}>Start
            </button>


        return (
            <div style={divStyles}>

                {startOrStopButton}

                <br />

            </div>
        )
    }
}

export default connect(null, { addSecond, reset })(Controls)