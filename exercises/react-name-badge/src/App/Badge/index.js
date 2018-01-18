import React from 'react';
import "../styles/Badge.css";

function Badge(props) {
    let { firstName, lastName, email, birthPlace, phone, favoriteFood, about, style } = props;
    return (
        <div className="badge">
            <div style={style} className="badge-header">
                <h1>Badge:</h1>
            </div>
            <div className="badge-wrapper">
                <p>Name: {firstName} {lastName}</p>
                <p>Place of Birth: {birthPlace}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Favorite Food: {favoriteFood}</p>
                <textarea>{about}</textarea>
            </div>
        </div>
    )
}

export default Badge;
