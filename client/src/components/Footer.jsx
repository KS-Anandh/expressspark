import React from "react";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>Transforming Education With Steam Learning</p>
        <p>Ph-No: +91 9346813383</p>
        <p>Mail-Id: chakriisai@gmail.com</p>
      </div>
      <div className="footer-info">
        <div className="footer-services">
          <h4>Our Offeres</h4>
          <ul>
            <li>IoT/ Robotics Lab</li>
            <li>STEM Lab</li>
            <li>AR/VR Lab</li>
            <li>Drone Technology</li>
            <li>3D Printing Technology</li>
            <li>Innovation and Coding Clubs</li>
          </ul>
        </div>
        <div className="branches">
          <h4>Our Branches</h4>
          <ul>
            <li>Kakinada</li>
            <li>Srikakulam</li>
            <li>hyderabad</li>
          </ul>
        </div>
        <div className="platforms">
          <h4>Our Platforms</h4>
          <ul>
            <li><a href="https://iotap.vercel.app" target="_blank">IOTAP</a></li>
            <li><a href="https://theexpresssparkacademy.com/" target="_blank">The ExpressSpark Acadamy</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
