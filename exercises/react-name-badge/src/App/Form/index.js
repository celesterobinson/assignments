import React, { Component } from 'react';
import Badge from "../Badge";
import "../styles/Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        let { firstName, lastName, email, birthPlace, phone, favoriteFood, about } = {};

        this.state = {
            inputs: {
                firstName: firstName || "",
                lastName: lastName || "",
                email: email || "",
                birthPlace: birthPlace || "",
                phone: phone || "",
                favoriteFood: favoriteFood || "",
                about: about || "",
            },
            badges: [],

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
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
        if (this.minChar()) {
            if (this.validPhone()) {
                this.clearInputs();
                this.setState((prevState) => {
                    return {
                        badges: [...prevState.badges, this.state.inputs]
                    }
                })
            } else {
                alert("Not a valid phone number. Use numbers only. 9 characters. (No dashes, etc.)")
            }
        } else {
            alert("You need to fill out all fields, completely.");
        }
    }
    clearInputs() {
        this.setState(() => {
            return {
                inputs: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    birthPlace: "",
                    phone: "",
                    favoriteFood: "",
                    about: ""
                }
            }
        })
    }
    minChar() {
        let inputs = this.state.inputs;
        if (inputs.about.length >= 3) {
            return true;
        }
        return false;
    }
    validPhone() {
        let inputs = this.state.inputs;
        if (inputs.phone.length !== 10) {
            return false;
        }
        return true;
    }
    backgroundColor(i) {
        let badges = this.state.badges;
        let style = { backgroundColor: "white" };
        if (i % 2 === 0) {
            style = { backgroundColor: "blue" };
        } else {
            style = { backgroundColor: "red" };
        }
        return style;
    }
    render() {
        let { badges } = this.state;
        let { firstName, lastName, email, birthPlace, phone, favoriteFood, about } = this.state.inputs;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="form-wrapper">
                        <input minlength="3" onChange={this.handleChange} required type="text" placeholder="First Name" name="firstName" value={firstName} />
                        <input minlength="3" onChange={this.handleChange} required type="text" placeholder="Last Name" name="lastName" value={lastName} /><br />
                        <input minlength="3" onChange={this.handleChange} required type="text" placeholder="Email" name="email" value={email} />
                        <input minlength="3" onChange={this.handleChange} required type="text" placeholder="Place of Birth" name="birthPlace" value={birthPlace} /><br />
                        <input minlength="3" onChange={this.handleChange} required type="number" placeholder="Phone" name="phone" value={phone} />
                        <input minlength="3" onChange={this.handleChange} required type="text" placeholder="Favorite Food" name="favoriteFood" value={favoriteFood} /><br />
                        <textarea pattern=".{3,}" onChange={this.handleChange} name="about" value={about} id="" cols="30" rows="10" placeholder="Tell us about yourself"></textarea><br />
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="badges">
                    {badges.map((badge, i) => {
                        const style = this.backgroundColor(i);
                        return <Badge style={style} {...badge} key={i}></Badge>
                    })}
                </div>
            </div>
        )
    }
}

export default Form;
