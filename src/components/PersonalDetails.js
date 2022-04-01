import React from "react";

export default function PersonalDetails() {

    const [names, setNames] = React.useState({
        name: ""
    })

    function getName(e) {
        console.log(names.name)
    }




    return (
        <div className="btns-container">
            <input 
                type="text" 
                placeholder="Name" 
                className="personal-name"   
                onChange={getName}
            />
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            <textarea type="text" placeholder="Description" rows="3" />
        </div>
    )
}