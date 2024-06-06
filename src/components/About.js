import React from "react";
import "../styles/About.css";
const About = ({id}) => {
  return (
    <div id={id} className="about">
      <div className="iconImg">
        <img src="/assets/ppick.png" alt="mylogo" />
      </div>
      <div className="aboutSecond">
        <img className="aboutme" src="/assets/aboutme.png" alt="aboutme" />
        <p><a href="https://drive.google.com/file/d/1YY0OxMPRHDVCpNYNTVLiAcFwoVrEem-H/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check My Resume</a></p>
        <p>
       <span>
       Experienced Full Stack Developer with 2+ years of hands-on experience
          in React and Node.js development.{" "}
       
          {" "}
          Strong leadership abilities, proactive learner, and adept at
          delivering high-quality solutions within tight deadlines.
        
          {" "}
          Skilled in cross-platform mobile app development, RESTful API
          design,and fostering collaborative team environments.
       </span>
        </p>
      </div>
    </div>
  );
};

export default About;
