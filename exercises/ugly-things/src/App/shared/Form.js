import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/posts";

import "../styles/Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        let { title, imgUrl, description } = props;
        this.state = {
            inputs: {
                title: title || "",
                imgUrl: imgUrl || "",
                description: description || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        e.preventDefault();
        let { addPost, add } = this.props;
        if (add) {
            addPost(this.state.inputs);
        }
        if (this.props.clear) {
            this.clearInputs();
        }
    }
    clearInputs() {
        this.setState({
            inputs: {
                title: "",
                imgUrl: "",
                description: ""
            }
        })
    }
    render() {
        let { title, imgUrl, description } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>uGly ThInGs</h1>
                <div className="inputs">
                    <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="Title" />
                    <input onChange={this.handleChange} value={imgUrl} name="imgUrl" type="text" placeholder="Image URL" />
                    <input onChange={this.handleChange} value={description} name="description" type="text" placeholder="Description" /><br />
                </div>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default connect(null, { addPost })(Form);