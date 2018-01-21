import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../../../redux/posts";

import "../../styles/Post.css";

function Post(props) {
    let { title, imgUrl, description, deletePost, index } = props;
    return (
        <div className="post">
            <h3>{title}</h3>
            <img src={imgUrl} alt={title} />
            <p>{description}</p>
            <button onClick={() => deletePost(index)}>X</button>
        </div>
    )
}

export default connect(null, { deletePost })(Post);