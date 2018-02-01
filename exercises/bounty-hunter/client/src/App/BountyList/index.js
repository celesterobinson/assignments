import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBounty } from "../redux/bounty";
import Bounty from "./Bounty";

class BountyList extends Component {
    componentDidMount() {
        this.props.getBounty();
    }
    render() {
        const { data } = this.props;
        const dataMap = data.map((bounty, i) => {
            return <Bounty key={i} {...bounty}></Bounty>
        })
        return (
            <div>
                {dataMap}
            </div>
        )
    }
}

export default connect(state => state.bounty, { getBounty })(BountyList);