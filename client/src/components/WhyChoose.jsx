import React from "react";
import ChooseItem from "./ChooseItem";
import item_1 from "../assets/images/item_1.png";
import item_3 from "../assets/images/item_2.png";
import item_2 from "../assets/images/item_3.png";
import item_4 from "../assets/images/item_4.png";
const WhyChoose = () => {
  return (
    <div className="student-achive">
      <center>
        <h1 style={{ margin: "50px 10px" }}>WHY CHOOSE EXPRESSSPARK?</h1>
      </center>
      <div className="chooseItems">
        <ChooseItem
          image={item_1}
          content={`Tailor-made kits branded with your school’s identity, creating a unique and engaging learning experience. These kits enable students to engage in practical, interdisciplinary learning using the latest technological tools.`}
          title={`Customised Kits for Hands-On STEAM Learning`}
        />
        <ChooseItem
          image={item_2}
          content={`Company-Certified Trainers: Our trainers are industry experts who bring their knowledge and experience into the classroom, ensuring top-notch guidance for students. Teacher Training: We provide comprehensive training programs for teachers, enabling them to effectively deliver the curriculum and inspire students.`}
          title={`Professional Support`}
        />
        <ChooseItem
          image={item_3}
          title={`Year-Round Workshops`}
          content={`Our interactive workshops are conducted throughout the academic year, keeping students motivated and informed about emerging technologies. These workshops offer opportunities for students to work on collaborative projects, explore new ideas, and develop practical solutions.`}
        />
        <ChooseItem
          image={item_4}
          content={`Marketing Assistance: We help schools showcase their commitment to innovation and 21st-century education through strategic marketing initiatives. Backend Support: Our team ensures a smooth implementation process, from scheduling sessions and managing logistics to resolving any operational challenges.`}
          title={`Comprehensive Marketing and Backend Support`}
        />
      </div>
      <div className="content">
        <p>
          <span style={{marginLeft:"30px",color:"orangered",fontWeight:"600",fontSize:"23px"}}>ExpressSpark</span> provides customized, school-branded STEAM kits for
          hands-on, interdisciplinary learning with advanced technology. Our
          industry-certified trainers and comprehensive teacher training ensure
          high-quality education delivery. Year-round workshops keep students
          engaged with emerging technologies and collaborative problem-solving.
          We offer strategic marketing support and seamless backend management
          for smooth implementation. With a focus on innovation and future-ready
          skills, ExpressSpark prepares students for 21st-century careers.
        </p>
      </div>
    </div>
  );
};

export default WhyChoose;
