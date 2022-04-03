import React from "react"

export default function PersonalDetailInputs(props) {
            return(
<div className="personal-details">
                    <h3>Personal Details</h3>
                    <input
                        className="personal-name" 
                        type="text" 
                        placeholder="John Doe" 
                        name="name"
                        value={props.nameInput}  
                        onChange={props.handleChange}
                        maxLength="12"
                    />
                    <input
                        className="job-title" 
                        type="text" 
                        placeholder="Software Developer" 
                        name="jobTitle"
                        value={props.jobInput}  
                        onChange={props.handleChange}
                        maxLength="24"
                    />
                    <input
                        className="phone" 
                        type="text" 
                        placeholder="Phone Number" 
                        name="phone"
                        value={props.phoneInput}  
                        onChange={props.handleChange}
                        maxLength="12"
                    />
                    <input
                        className="email" 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={props.emailInput}  
                        onChange={props.handleChange}
                        maxLength="24"
                    />
                    <input
                        className="location" 
                        type="text" 
                        placeholder="City,Country" 
                        name="location"
                        value={props.locationInput}  
                        onChange={props.handleChange}
                        maxLength="24"
                    />
                    <textarea rows="5" 
                        className="about-me" 
                        type="text" 
                        placeholder="Write about yourself" 
                        name="aboutMe"
                        value={props.aboutMeInput}  
                        onChange={props.handleChange}
                    />
                </div>
            )       
}

