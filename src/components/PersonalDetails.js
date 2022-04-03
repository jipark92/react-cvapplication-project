import React from "react";




export default function PersonalDetails(props) {

    

    return (
        <div className="text-outputs">
            <div className="template-heading">
                <div className="fullname-jobtitle">
                    <div className="fullname">
                        <h1>{props.yourFullName}</h1>
                    </div>
                    <div className="job-title">
                        <h3>{props.yourJob}</h3>
                    </div>
                </div>

                <div className="phone-email-location">
                    <div className="phone-container">
                        <p>{props.yourNumber}</p>
                        <img src="https://img.icons8.com/ios-filled/344/apple-phone.png" className="phone-icon"/>
                    </div>
                    <div className="email-container">
                        <p>{props.yourEmail}</p>
                        <img src="https://img.icons8.com/ios-filled/344/email-open.png" className="email-icon"/>
                    </div>
                    <div className="location-container">
                        <p>{props.yourLocation}</p>
                        <img src="https://img.icons8.com/ios-filled/344/worldwide-location.png" className="locaiton-icon"/>          
                    </div>
                </div>
            </div>

            <div className="seperator"></div>

            <div className="aboutme-container">
                <p>{props.yourAboutMe}</p>
            </div>
        </div>
    )
}