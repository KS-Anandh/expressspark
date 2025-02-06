import React from "react";
import image from '../assets/images/programBreakdown.png'
const AboutAfterSchool = () => {
  return (
    <div className="aboutAfterSchool">
      <div className="programHighlights">
        <h2 style={{color:"orangered"}}> Program Highlights </h2>
        <ul>
          <li>
           <span className="textBold">Academic Excellence with Practical Learning:</span>  Strengthen core
            subjects with interactive experiments, customized kits, and
            real-world applications.{" "}
          </li>
          <li>
          <span className="textBold">Future-Ready Skills:</span>   Gain expertise in STEM, Robotics, IoT, DIY
            Projects, Drone Technology, and Virtual Reality, preparing students
            for tomorrow’s challenges{" "}
          </li>
          <li>
          <span className="textBold">Holistic Growth:</span>  Boost communication skills, confidence, and
            personality development. Enhance math abilities with Vedic Maths and
            Abacus, while fostering critical thinking and creativity{" "}
          </li>
          <li>
          <span className="textBold">Workshops & Add-On Sessions:</span>  Engaging workshops in Robotics, IoT,
            VR, and more, promoting innovation and curiosity.
          </li>
          <li>
          <span className="textBold">Progress Tracking: </span> Regular daily and weekly tests to monitor
            academic progress, along with performance tracking across skills and
            personal development. Detailed reports shared with parents to
            highlight strengths and areas for improvement
          </li>
        </ul>
      </div>
      <div className="break-down">
        <h2 style={{color:"orangered"}} >Our 3-Hours Program Breakdown </h2>
        <ul>
            <li><span className="showcase" style={{color:"rgb(22, 0, 87)"}}>45 Minutes :</span> Communication& Personality Development. Build Communication. Spoken English and Confidence through Structured Activities</li>
            <li><span className="showcase" style={{color:"rgb(131, 0, 59)"}}>45 Minutes :</span> Future Skills Explore, STEM , Robotics,IoT,AR/VR, DIY and Drone Tech through Hands-on Learning</li>
            <li><span className="showcase" style={{color:"green"}}>1:30 Minutes :</span> Daily Academics Strenghen core subjects with practical kits, IIT JEE & NEET prep, Vedic Maths and Abacus.</li>
        </ul>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default AboutAfterSchool;
