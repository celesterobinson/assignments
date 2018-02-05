import React, { Component } from 'react';
import { connect } from "react-redux";
import { postIssue, updateIssue } from "../redux/issue";
import "../styles/Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        let { title, description } = props;
        this.state = {
            inputs: {
                title: title || "",
                description: description || ""
            }
            // newPost: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        // this.togglePost = this.togglePost.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(e) {
        let { _id, add, postIssue, updateIssue, clear, options } = this.props;
        e.preventDefault();
        if (add) {
            postIssue(this.state.inputs);
            // this.togglePost();
        } else {
            updateIssue(this.state.inputs, _id);
            options.toggle();
        }
        if (clear) {
            this.clearInputs();
        }
    }

    clearInputs() {
        this.setState({
            inputs: {
                title: "",
                description: ""
            }
        })
    }

    // togglePost() {
    //     this.setState({
    //         newPost: !this.state.newPost
    //     })
    // }

    render() {
        let { title, description } = this.state.inputs;
        // if (!this.state.newPost) {
        //     return (
        //         <div onClick={this.togglePost} className="new-post">
        //             <h3>Create New Post</h3>
        //         </div>
        //     )
        // }
        return (
            <div className="form-wrapper">
                <h2>Create a Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-elements" onChange={this.handleChange} type="text" name="title" value={title} placeholder="Title" />
                    <textarea className="user-post, form-elements" onChange={this.handleChange} type="text" name="description" value={description} placeholder="Description"></textarea>
                    <button className="form-elements">Submit Post</button>
                </form>
            </div>
        )
    }
}

export default connect(null, ({ postIssue, updateIssue }))(Form);
