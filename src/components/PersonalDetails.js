import React from "react";

export default function PersonalDetails() {
    return (
        <div className="btns-container">
            <input type="text" placeholder="Name" className="name"/>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            <textarea type="text" placeholder="Description" rows="3" />
        </div>
    )
}