import React, {Component} from "react";
import "./index.css";

function BlogPost(props) {
    let {title, subtitle, author, date} = props;
    return (
        <div className="blog-post">
            <div className="blog-content">
                <h1>{title}<br/><span className="subtitle">{subtitle}</span></h1>
                <h6>Posted by <a href="#">{author}</a> on {date}</h6>
            </div>
        </div>
    )
}

export default BlogPost;