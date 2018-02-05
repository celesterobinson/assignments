import React, { Component } from 'react';
import { connect } from "react-redux";
import { getIssue } from "../redux/issue";
import Issue from "./Issue";
import "../styles/IssueList.css";

class IssueList extends Component {
    componentDidMount() {
        this.props.getIssue();
    }
    render() {
        const { data, loading } = this.props;        
        let sortedArray = [];
        if (!loading) {
            sortedArray = data.sort((num1, num2) => {
                let num1Total = num1.upvotes-num1.downvotes;
                let num2Total = num2.upvotes-num2.downvotes;
                return num2Total - num1Total;
            })
        }
        const dataMap = data.map((issue, i) => {
            return <Issue key={i} {...issue}></Issue>
        })
        return (
            <div className="issue-list">
                {dataMap}
            </div>
        )
    }
}

export default connect(state => state.issue, { getIssue })(IssueList)
