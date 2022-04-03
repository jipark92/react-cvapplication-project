import React from "react";

export default function MainContent() {

    const [fullNames, setFullNames] = React.useState({
        name: "",
        jobTitle: ""
    })

    function getDetails(e) {
        const {name, value} = e.target
        setFullNames(prevNames => ({
            ...prevNames,
            [name]: value
        }))
    }



    return (
        <div className="main-container">
            <div className="text-inputs">
                <h2>Personal</h2>

                <input
                    className="personal-name" 
                    type="text" 
                    placeholder="John Doe" 
                    name="name"
                    value={fullNames.name}  
                    onChange={getDetails}
                />

                <input
                    className="job-title" 
                    type="text" 
                    placeholder="Software Developer" 
                    name="jobTitle"
                    value={fullNames.jobTitle}  
                    onChange={getDetails}
                />



            </div>

            <div className="text-outputs">
                <div className="template-heading">
                    <div className="fullname-jobtitle">
                        <div className="fullname">
                            <h1>{fullNames.name}</h1>
                        </div>
                        <div className="job-title">
                            <h2>{fullNames.jobTitle}</h2>
                        </div>
                    </div>

                    <div className="phone-email-location">
                        <p>123123</p>
                        <p>123123@gmail.com</p>
                        <p>Location</p>
                    </div>
                </div>
                    




            </div>
        </div>
    )
}