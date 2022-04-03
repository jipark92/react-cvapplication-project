import React from "react";
import PersonalDetails from "./components/PersonalDetails";
import PersonalDetailInputs from "./components/PersonalDetailsInputs";
import WorkExperienceInputs from "./components/WorkExperienceInputs";
import EducationInput from "./components/EducationInputs";


export default function App() {
    const [fullDetails, setfullDetails] = React.useState({
        name: "John Doe",
        jobTitle: "Software Developer",
        phone: "123-456-7890",
        email: "example@gmail.com",
        location: "city, state",
        aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas, tenetur provident ut voluptas odio nesciunt sed et ipsam deserunt totam laborum, dolorum dolor veritatis tempore harum magni possimus nulla. Magnam placeat sit non rem fuga animi id repudiandae quidem?",
        company: "Google",
        position:"",
        startDate: "",
        endDate:"",
        aboutWork: "",
        course:"",
        university:"",
        courseStart:"",
        courseEnd:"",
        aboutEducation:""
    })

    function getDetails(e) {
        const {name, value} = e.target
        setfullDetails(prevNames => ({
            ...prevNames,
            [name]: value
        }))
    }

    return(
        <div className="main-container">

            <div className="text-inputs">
                <PersonalDetailInputs 
                    nameInput={fullDetails.name}
                    jobInput={fullDetails.job}
                    phoneInput={fullDetails.phone}
                    emailInput={fullDetails.email}
                    locationInput={fullDetails.location}
                    aboutMeInput={fullDetails.aboutMe}
                    handleChange={getDetails}
                />

                <WorkExperienceInputs
                    companyInput={fullDetails.company}
                    positionInput={fullDetails.position}
                    startInput={fullDetails.startDate}
                    endInput={fullDetails.endDate}
                    aboutWorkInput={fullDetails.aboutWork}
                    handleChange={getDetails}
                />

                <EducationInput
                    courseInput={fullDetails.course}
                    universityInput={fullDetails.university}
                    courseStartInput={fullDetails.courseStart}
                    courseEndInput={fullDetails.courseEnd}
                    aboutEducationInput={fullDetails.aboutEducation}
                    handleChange={getDetails}
                />
            </div>

            <div className="text-outputs">
                <PersonalDetails
                    yourFullName={fullDetails.name}
                    yourJob={fullDetails.jobTitle}
                    yourNumber={fullDetails.phone}
                    yourEmail={fullDetails.email}
                    yourLocation={fullDetails.location}
                    yourAboutMe={fullDetails.aboutMe}
                />
            </div>

        </div>
    )
}