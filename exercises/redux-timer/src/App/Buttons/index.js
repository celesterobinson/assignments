import React, { Component } from "react";
import { connect } from "react-redux";
import { addSecond, reset, addLap } from "../../redux"

class Buttons extends Component {
    constructor() {
        super();
        this.state = {
            intervalId: null
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.lap = this.lap.bind(this);
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

    lap() {
        this.props.addLap();
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
                    onClick={this.lap}
                    style={{ ...buttonStyles, backgroundColor: "black", color: "white" }}>Lap
                </button>
                <br />
                <button
                    onClick={this.resetTimer}
                    style={{ ...buttonStyles, backgroundColor: "#737070" }}>Reset
                </button>
            </div>
            :
            <div>
                <button
                    onClick={this.startTimer}
                    style={buttonStyles}>Start
            </button>
                <br />
                <button
                    onClick={this.resetTimer}
                    style={{ ...buttonStyles, backgroundColor: "#737070" }}>Reset
            </button>
            </div>

        return (
            <div style={divStyles}>
                {startOrStopButton}
                <br />
            </div>
        )
    }
}

export default connect(state => state, { addSecond, reset, addLap })(Buttons);