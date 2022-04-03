import React from "react";

export default function WorkExperience(props) {
    return(
        <div className="work-input">
                    <h3>Work Experience</h3>
                    <input
                        className="company-name" 
                        type="text" 
                        placeholder="Company" 
                        name="company"
                        value={props.companyInput}  
                        onChange={props.handleChange}
                        maxLength="16"
                    />
                    <input
                        className="position-title" 
                        type="text" 
                        placeholder="Position" 
                        name="position"
                        value={props.positionInput}  
                        onChange={props.handleChange}
                        maxLength="16"
                    />
                    <input
                        className="start-date" 
                        type="text" 
                        placeholder="Start Date" 
                        name="startDate"
                        value={props.startInput}  
                        onChange={props.handleChange}
                        maxLength="10"
                    />
                    <input
                        className="end-date" 
                        type="text" 
                        placeholder="End Date" 
                        name="endDate"
                        value={props.endInput}  
                        onChange={props.handleChange}
                        maxLength="10"
                    />
                    <textarea rows="5" 
                        className="about-work" 
                        type="text" 
                        placeholder="Write About Work" 
                        name="aboutWork"
                        value={props.aboutWorkInput}  
                        onChange={props.handleChange}
                    />
                </div> 
    )
}