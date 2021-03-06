import React from "react";

export default function EducationInput(props) {
    return (
        <div className="education-input">
            <h3>Education</h3>
            <input
                className="course-program"
                type="text"
                placeholder="Course/Program"
                name="course"
                value={props.courseInput}  
                onChange={props.handleChange}
                maxLength="16"
            />
            <input
                className="university"
                type="text"
                placeholder="University"
                name="university"
                value={props.universityInput}  
                onChange={props.handleChange}
                maxLength="16"
            />
            <input
                className="course-start"
                type="text"
                placeholder="Start Date"
                name="courseStart"
                value={props.courseStartInput}  
                onChange={props.handleChange}
                maxLength="10"
            />
            <input
                className="course-end"
                type="text"
                placeholder="End Date"
                name="courseEnd"
                value={props.courseEndInput}  
                onChange={props.handleChange}
                maxLength="10"
            />
            <textarea 
                rows="3" 
                className="about-education" 
                type="text" 
                placeholder="Write About Education" 
                name="aboutEducation"
                value={props.aboutEducationInput}  
                onChange={props.handleChange}
            />
            {/* <button>Add</button>
            <button>Remove</button> */}
        </div>
    )
}