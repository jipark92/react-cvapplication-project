import React from "react";
import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export default function MainContent1() {
    return (
        <div className="content-1">
            <div className="personal-details">
                <h3>Personal Details</h3>
                <PersonalDetails />
            </div>
            <div className="work-experience">
                <h3>Work Experience</h3>
                <WorkExperience />
            </div>
            <div className="education">
                <h3>Education</h3>
                <Education />
            </div>
        </div>
    )
}