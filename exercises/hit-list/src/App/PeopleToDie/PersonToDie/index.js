import React, { Component } from "react";
import axios from "axios";

let hitListPersonUrl = "http://api.vschool.io:6543/hitlist.json";

class PersonToDie extends Component {
    constructor(props) {
        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        axios.get(hitListPersonUrl + id)
            .then((response) => {
                let { data } = response;
                this.setState({
                    person: data
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
    render() {
        let { person } = this.state;
        let { name, image } = person;
        let style = { backgroundImage: `url(${image})` };
        return (
            <div style={style}>
                <h2>{name}</h2>
            </div>
        )
    }
}

export default PersonToDie;
