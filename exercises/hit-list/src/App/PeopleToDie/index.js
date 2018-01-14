import react, { Component } from "react";
import PersonToDie from "./PersonToDie";

import { Link } from "react-router-dom";
import axios from "axios";

let hitListPeopleUrl = "http://api.vschool.io:6543/hitlist.json";

class PeopleToDie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
        this.addPerson = this.addPerson.bind(this);
    }

    addPerson(person) {
        axios.post(hitListPeopleUrl, person)
            .then((response) => {
                let { data } = response;
                this.setState((prevState) => {
                    let newPerson = [...prevState.todos, data]
                    return {
                        people: newPerson
                    }
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    componentDidMount() {
        axios.get(hitListPeopleUrl)
            .then((response) => {
                let { data } = response;
                this.setState({
                    people: data
                })
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    people: []
                })
            })
    }

    render() {
        let { people } = this.state;
        return (
            <div className="people">
                {people.map((person, i) => {
                    <PersonToDie key={i} {...person}></PersonToDie>
                })}
            </div>
        )
    }
}

export default PeopleToDie;
