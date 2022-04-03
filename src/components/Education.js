import React from "react";

export default function Education(props) {
    return (
        <div className="education-container">
            <h3>Education</h3>

            <div className="university-container">
                <div >
                    <p>Course: {props.yourCourse}</p>
                </div>
                <div className="university-detail">
                    <p>University: {props.yourUniversity}</p>
                    <p>Start: {props.yourStartCourse}</p>
                    <p>End: {props.yourEndCourse}</p>           
                </div>
            </div>

            <div className="about-education">
                {props.yourAboutEducation}
            </div>
        </div>
    )
}