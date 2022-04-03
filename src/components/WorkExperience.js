import React from "react";

export default function WorkExperience(props) {
    return (
        <div className="work-experience">
            <h3>Work Experience</h3>

            <div className="company-container">
                <div >
                    <p>Position: {props.yourPosition}</p>
                </div>
                <div>
                    <p>Company: {props.yourCompany}</p>
                    <p>Start: {props.yourStartDate}</p>
                    <p>End: {props.yourEndDate}</p>           
                </div>
            </div>

            <div className="about-position">
                {props.yourAboutWork}
            </div>
        </div>
    )
}