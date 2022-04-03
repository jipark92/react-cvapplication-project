import React from "react";

export default function MainContent() {

    const [fullDetails, setfullDetails] = React.useState({
        name: "John Doe",
        jobTitle: "Software Developer",
        phone: "123-456-7890",
        email: "example@gmail.com",
        location: "city, state",
        aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas, tenetur provident ut voluptas odio nesciunt sed et ipsam deserunt totam laborum, dolorum dolor veritatis tempore harum magni possimus nulla. Magnam placeat sit non rem fuga animi id repudiandae quidem?"
    })

    function getDetails(e) {
        const {name, value} = e.target
        setfullDetails(prevNames => ({
            ...prevNames,
            [name]: value
        }))
    }



    return (
        <div className="main-container">
            <div className="text-inputs">
                <div className="personal-details">
                    <h3>Personal Details</h3>
                    <input
                        className="personal-name" 
                        type="text" 
                        placeholder="John Doe" 
                        name="name"
                        value={fullDetails.name}  
                        onChange={getDetails}
                        maxLength="12"
                    />

                    <input
                        className="job-title" 
                        type="text" 
                        placeholder="Software Developer" 
                        name="jobTitle"
                        value={fullDetails.jobTitle}  
                        onChange={getDetails}
                        maxLength="24"
                    />

                    <input
                        className="phone" 
                        type="text" 
                        placeholder="Phone Number" 
                        name="phone"
                        value={fullDetails.phone}  
                        onChange={getDetails}
                        maxLength="12"
                    />

                    <input
                        className="email" 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={fullDetails.email}  
                        onChange={getDetails}
                        maxLength="24"
                    />

                    <input
                        className="location" 
                        type="text" 
                        placeholder="City,Country" 
                        name="location"
                        value={fullDetails.location}  
                        onChange={getDetails}
                        maxLength="24"
                    />

                    <textarea rows="5" 
                        className="about-me" 
                        type="text" 
                        placeholder="Write about yourself" 
                        name="aboutMe"
                        value={fullDetails.aboutMe}  
                        onChange={getDetails}
                    />
                </div>
            </div>
                

            <div className="text-outputs">
                <div className="template-heading">
                    <div className="fullname-jobtitle">
                        <div className="fullname">
                            <h1>{fullDetails.name}</h1>
                        </div>
                        <div className="job-title">
                            <h3>{fullDetails.jobTitle}</h3>
                        </div>
                    </div>

                    <div className="phone-email-location">
                        <div className="phone-container">
                            <p>{fullDetails.phone}</p>
                            <img src="https://img.icons8.com/ios-filled/344/apple-phone.png" className="phone-icon"/>
                        </div>
                        <div className="email-container">
                            <p>{fullDetails.email}</p>
                            <img src="https://img.icons8.com/ios-filled/344/email-open.png" className="email-icon"/>
                        </div>
                        <div className="location-container">
                            <p>{fullDetails.location}</p>
                            <img src="https://img.icons8.com/ios-filled/344/worldwide-location.png" className="locaiton-icon"/>          
                        </div>
                    </div>
                </div>

                <div className="seperator"></div>

                <div className="aboutme-container">
                    <p>{fullDetails.aboutMe}</p>
                </div>
                    












            </div>
        </div>
    )
}