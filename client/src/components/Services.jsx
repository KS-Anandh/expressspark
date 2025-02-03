import React from "react";
import Service from "./Service";
import service_1 from "../assets/images/service_1.png";
import service_2 from "../assets/images/service_2.png";
import service_3 from "../assets/images/service_3.png";
import service_4 from "../assets/images/service4.png";
import service_5 from "../assets/images/service_5.png";
import service_6 from "../assets/images/service_6.png";
const Services = () => {
  return (
    <div className="services">
      <Service
        title={"IoT/ Robotics Lab"}
        content={` Our STEM and IoT lab provides an interactive platform 
          for students to explore technology-driven innovation. With expert
           guidance, students gain hands-on experience in coding,
            electronics, and smart systems. These labs simplify complex 
            STEM and IoT concepts, turning theory into real-world 
            applications. Our approach equips students with the skills 
          to thrive in the future of connected technology. `}
        image={service_1}
        bg={`rgb(138, 245, 255)`}
      />
      <Service
        image={service_2}
        content={`ExpressSpark is your gateway to 
        the world of STEM innovation. We offer the expertise and resources
         to build advanced STEM labs for hands-on learning. Our mission is 
         to inspire the next generation of thinkers and creators through
          immersive STEM experiences. Students can explore science,
           technology, engineering, and mathematics, fostering creativity
            and critical problem-solving skills. `}
        title={"STEM Lab"}
        size={220}
      />
      <Service
        title={"AR/VR Lab"}
        content={`Our AR/VR lab provides an interactive 
      platform for students and educators to explore and create in virtual 
      environments. With expert guidance, students gain practical skills to
       navigate the world of AR and VR. These labs simplify complex academic
        concepts, turning theory into engaging, hands-on learning. Our approach 
        ensures students are ready for the future of immersive technology.`}
        bg={"pink"}
        image={service_3}
        size={250}
      />
      <Service
        image={service_4}
        title={"Drone Technology"}
        bg={"rgb(249, 203, 134)"}
        content={`Our drone technology lab offers a dynamic platform for students to explore and innovate in the world of UAVs. With expert guidance,
         students gain hands-on experience in drone design, programming, and operations. These labs simplify complex engineering concepts, transforming theory 
         into practical learning. Our approach equips students with the skills to excel in the evolving field of drone technology`}
      />
      <Service
        content={`Our 3D printing lab offers a hands-on 
      platform for students to bring their ideas to life through
       digital fabrication. With expert guidance, they learn design, 
       prototyping, and manufacturing techniques. These labs simplify
        complex engineering and design concepts, transforming theory
         into practical innovation. Our approach equips students with the skills 
      to excel in the evolving world of 3D printing technology`}
        image={service_5}
        title={"3D Printing Technology"}
        bg={`rgb(167, 154, 220)`}
      />
      <Service
        content={`ExpressSpark's Innovation and Coding Clubs 
      provide a dynamic space for students to experiment, create,
       and collaborate on cutting-edge projects. With expert mentorship,
        they develop coding, problem-solving, and critical thinking 
        skills. These clubs transform ideas into real-world applications, 
        fostering creativity and technological innovation.`}
        title={'Innovation and Coding Clubs'}
      image={service_6}
      bg={'rgb(246, 149, 255)'}
      />
    </div>
  );
};

export default Services;
