import React from "react";
import MainContent1 from './components/MainContent1'
import MainContent2 from './components/content2/MainContent2'


export default function App() {
    return(
        <div className="main-container">
            <MainContent1 />
            <MainContent2 />
        </div>
    )
}