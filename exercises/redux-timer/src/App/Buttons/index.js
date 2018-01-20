import React, { Component } from "react";
import { connect } from "react-redux";
import { addSecond, reset } from "../../redux"

class Buttons extends Component {
    constructor() {
        super();
        this.state = {
            intervalId: null
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer() {
        const id = setInterval(this.props.addSecond, 1000);
        this.setState({
            intervalId: id
        })
    }

    stopTimer() {
        clearInterval(this.startTimer.intervalId);
    }

    reset() {
        this.stopTimer();
        this.props.reset;
    }

    render() {
        const styles = {
            textAlign: "center"
        }
        return (
            <div className="buttons">
                <button style={styles} name="start" onClick={this.startTimer}>Start</button>
                <button name="stop" onClick={this.stopTimer}>Stop</button>
                <button name="reset" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default connect(null, { addSecond, reset })(Buttons);