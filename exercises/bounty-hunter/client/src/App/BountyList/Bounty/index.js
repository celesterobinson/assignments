import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteBounty } from "../../redux/bounty";
import Form from "../../shared/Form";

class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    render() {
        let { firstName, lastName, bountyAmount, living, type, _id, deleteBounty } = this.props;
        if (this.state.isEditing) {
            return (
                <div>
                    <h1>Edit Bounty</h1>
                    <Form {...this.props} options={{toggle: this.toggleEdit }}/>
                    <button onClick={this.toggleEdit}>Cancel</button>
                </div>
            )
        }
        return (
            <div>
                <h1>{firstName} {lastName}</h1>
                <h2>${bountyAmount}</h2>
                <h3>{living ? "They're still alive?? Get to work!" : "Great work. They're dead. On to the next one!"}</h3>
                <h3>{type}</h3>
                <button onClick={this.toggleEdit}>Edit</button>
                <button onClick={() => deleteBounty(_id)}>Delete</button>
            </div>
        )
    }
}

export default connect(null, { deleteBounty })(Bounty);
