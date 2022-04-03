import React from "react";
import PersonalDetails from "./components/PersonalDetails";
import PersonalDetailInputs from "./components/inputforms/PersonalDetailsInputs";
import WorkExperience from "./components/WorkExperience";
import WorkExperienceInputs from "./components/inputforms/WorkExperienceInputs";
import Education from "./components/Education";
import EducationInput from "./components/inputforms/EducationInputs";

export default function App() {
    const [fullDetails, setfullDetails] = React.useState({
        name: "John Doe",
        jobTitle: "Software Developer",
        phone: "123-456-7890",
        email: "example@gmail.com",
        location: "city, state",
        aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas, tenetur provident ut voluptas odio nesciunt sed et ipsam deserunt totam laborum, dolorum dolor veritatis tempore harum magni possimus nulla. Magnam placeat sit non rem fuga animi id repudiandae quidem?",
        company: "Google",
        position:"Junior Dev",
        startDate: "01/01/2022",
        endDate:"12/12/2022",
        aboutWork: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint in? Sit, at labore animi in ipsam corporis omnis! Dignissimos?",
        course:"JavaScript",
        university:"John University",
        courseStart:"01/01/2022",
        courseEnd:"12/12/2022",
        aboutEducation:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint in? Sit, at labore animi in ipsam corporis omnis! Dignissimos?"
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
                    jobInput={fullDetails.jobTitle}
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
                <WorkExperience
                    yourCompany={fullDetails.company}
                    yourPosition={fullDetails.position}
                    yourStartDate={fullDetails.startDate}
                    yourEndDate={fullDetails.endDate}
                    yourAboutWork={fullDetails.aboutWork}
                />
                <Education 
                    yourCourse={fullDetails.course}
                    yourUniversity={fullDetails.university}
                    yourStartCourse={fullDetails.courseStart}
                    yourEndCourse={fullDetails.courseEnd}
                    yourAboutEducation={fullDetails.aboutEducation}
                />
            </div>
        </div>
    )
}