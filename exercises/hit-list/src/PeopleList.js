import React, {Component} from "react";
import axios from "axios";

import Person from "./Person";
import "./styles/PeopleList.css";

class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get("http://api.vschool.io:6543/hitlist.json")
            .then(response => {
                this.setState({
                    people: response.data
                });
            });
    }
    render() {
        const peopleList = this.state.people.map((person, index) => {
            return <Person {...person} key={index}></Person>
        })
        return (
            <div className="people-list">
                {peopleList}
            </div>
        )
    }
}

export default PeopleList;
