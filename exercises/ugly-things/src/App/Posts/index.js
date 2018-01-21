import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

import "../styles/Posts.css";


function Posts(props) {
    let { posts } = props;
    let postComponent = posts.map((post, i) => {
        return <Post key={i + post.name} {...post} index={i}></Post>
    })
    return (
        <div className="posts">
            {postComponent}
        </div>
    )
}
const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, {})(Posts);