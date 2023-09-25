// Resume.js
import React from "react";
import Profile from "./Profile";
import Description from "./Description";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Education from "./Education";
import Experience from "./Experience";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="left-section">
        <Profile />
        {/* Add Contact Info Component */}
      </div>
      <div className="right-section">
        <Description />
        <Skills />
        <Certificates />
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
