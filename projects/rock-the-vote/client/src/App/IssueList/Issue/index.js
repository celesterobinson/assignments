import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteIssue, updateIssue } from "../../redux/issue";
import Form from "../../shared/Form";
import "../../styles/Issue.css";

class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    toggleEdit() {
        this.setState({
            isEditing:
                !this.state.isEditing
        })
    }

    render() {
        let { title, description, _id, deleteIssue, downvotes, upvotes, updateIssue } = this.props;
        if (this.state.isEditing) {
            return (
                <div className="edit-form">
                    <Form {...this.props} options={{ toggle: this.toggleEdit }} />
                    <button onClick={this.toggleEdit}>Cancel</button>
                </div>
            )
        }
        return (
            <div className="issue">
                <div className="content">
                    <h1>{title}</h1>
                    <button className="votes" onClick={() => updateIssue({ upvotes: 1 + upvotes }, _id)} name="upvote">&#8593;</button>
                    <span> Upvotes: {upvotes}</span>
                    <button className="votes" onClick={() => updateIssue({ downvotes: downvotes + 1 }, _id)} name="downvote">&#8595;</button>
                    <span style={{ }}> Downvotes: {downvotes}</span>
                    
                </div>
                <div className="description">
                    <h3>{description}</h3>
                </div>

                <div className="buttons">
                    <button className="edit-button" onClick={this.toggleEdit}>EDIT</button>
                    <button className="delete-button" onClick={() => deleteIssue(_id)}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteIssue, updateIssue })(Issue);
