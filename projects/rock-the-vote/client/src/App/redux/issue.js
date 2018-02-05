import axios from "axios";

const issueReducer = (prevState = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "POST_ISSUE":
            return {
                loading: false,
                data: [...prevState.data, action.data]
            }
        case "GET_ISSUE":
            return {
                loading: false,
                data: action.data
            }
        case "UPDATE_ISSUE":
            return {
                loading: false,
                data: prevState.data.map((issue) => {
                    if (issue._id === action.id) {
                        return action.updatedIssue;
                    } else {
                        return issue
                    }
                })
            }
        case "DELETE_ISSUE":
            return {
                loading: false,
                data: prevState.data.filter((issue) => {
                    return issue._id !== action.id;
                })
            }
            
        default:
            return prevState
    }
}

const issueUrl = `/issue/`;

export const postIssue = (inputs) => {
    return dispatch => {
        axios.post(issueUrl, inputs)
            .then((response) => {
                console.log(response);
                let { data } = response;
                dispatch({
                    type: "POST_ISSUE",
                    data
                })
            })
    }
}

export const getIssue = () => {
    return dispatch => {
        axios.get(issueUrl)
            .then((response) => {
                console.log(response);
                let { data } = response;
                dispatch({
                    type: "GET_ISSUE",
                    data
                })
            })
    }
}

export const updateIssue = (updatedIssue, id) => {
    return dispatch => {
        axios.put(issueUrl + id, updatedIssue)
            .then((response) => {
                dispatch({
                    type: "UPDATE_ISSUE",
                    updatedIssue: response.data,
                    id
                })
            })
    }
}

export const deleteIssue = (id) => {
    return dispatch => {
        axios.delete(issueUrl + id, id)
            .then((response) => {
                dispatch({
                    type: "DELETE_ISSUE",
                    id
                })
            })
    }
}

export default issueReducer;