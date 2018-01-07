import React, {Component} from "react";
import "./index.css";

function BlogPost(props) {
    let {title, subtitle, author, date} = props;
    return (
        <div className="blog-post">
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
            <h6>Posted by {author} on {date}</h6>
        </div>
    )
}

export default BlogPost;