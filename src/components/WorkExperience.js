import React from "react";

export default function WorkExperience() {
    return (
        <div className="btns-container">
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Position" />
            <input type="text" placeholder="Start Date" />
            <input type="text" placeholder="End Date" />
            <textarea type="text" placeholder="Description" rows="3" cols="50" />
        </div>

    )
}