import React, { Component } from 'react';
import { connect } from "react-redux";
import { postBounty, updateBounty } from "../redux/bounty";

class Form extends Component {
    constructor(props) {
        super(props);
        let { firstName, lastName, bountyAmount, living, type } = props;
        this.state = {
            inputs: {
                firstName: firstName || "",
                lastName: lastName || "",
                bountyAmount: bountyAmount || "",
                living: living || "",
                type: type || "Jedi"
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange(e) {
        let { name, value, type, checked } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        })
    }

    handleSubmit(e) {
        let { _id, add, postBounty, updateBounty, clear, options } = this.props;
        e.preventDefault();
        if (add) {
            postBounty(this.state.inputs);
        } else {
            updateBounty(this.state.inputs, _id);
            options.toggle();
        }
        if (clear) {
            this.clearInputs();
        }
    }
    clearInputs() {
        this.setState({
            inputs: {
                firstName: "",
                lastName: "",
                bountyAmount: "",
                living: "",
                type: "Jedi"
            }
        })
    }
    render() {
        let { firstName, lastName, bountyAmount, living, type } = this.state.inputs;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="firstName" onChange={this.handleChange} value={firstName} type="text" placeholder="First Name" /><br />
                    <input name="lastName" onChange={this.handleChange} value={lastName} type="text" placeholder="Last Name" /><br />
                    <input name="bountyAmount" onChange={this.handleChange} value={bountyAmount} type="number" placeholder="Bounty Amount" /><br />
                    <label htmlFor="">Living </label><br />
                    <input onChange={this.handleChange} checked={living} name="living" type="checkbox" /><br />
                    <label htmlFor="">Sith or Jedi? </label>
                    <select onChange={this.handleChange} name="type" id="" value={type}>
                        <option value="Sith">Sith</option>
                        <option value="Jedi">Jedi</option>
                    </select>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, ({ postBounty, updateBounty }))(Form);
