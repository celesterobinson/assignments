import React, {Component} from "react";
import BlogPost from "./BlogPost";
import "./index.css";

function BlogList(props) {

    let posts = [
        {
            title: "Man must explore, and this is exploration at its greatest",
            subtitle: "Problems look might small from 150 miles up",
            author: "Start Bootstrap",
            date: "September 24, 2017"
        },{
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            subtitle: "",
            author: "Start Bootstrap",
            date: "September 18, 2017"
        },{
            title: "Science has not yet mastered prophecy",
            subtitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: "Start Bootstrap",
            date: "August 24, 2017"
        },{
            title: "Failure is not an option",
            subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations",
            author: "Start Bootstrap",
            date: "July 8, 2017"
        },{
            title: "Star Wars",
            subtitle: "Austie's debut as young luke skywalker",
            author: "Austie Robinson",
            date: "January 7, 2018"
        }
    ]

    return (
            <div className="blogs">
                {posts.map((post) => {
                    return <BlogPost {...post}></BlogPost>
                })}
                <div className="button-div">
                    <button className="older-posts">OLDER POSTS &rarr;</button>
                </div>
            </div>
    )
}

export default BlogList;