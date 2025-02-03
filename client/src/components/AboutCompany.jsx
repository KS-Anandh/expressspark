import React from 'react'
import robo_lab from "../assets/images/robo-lab.png";
import { motion } from 'framer-motion';
const AboutCompany = ({bg}) => {
  return (
    <div>
       <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration:1}}
                viewport={{ once: true, amount: 0.2 }}
              >
        <div className="about-company-info">
          <center><h3>ExpressSpark: Innovating Education & Technology</h3></center>
          <p>
            <span style={{marginLeft:"30px",color:"orangered",fontWeight:"600",fontSize:"23px"}}>
              ExpressSpark
            </span>{" "}
            is a dynamic and innovative firm dedicated to revolutionizing
            education through IoT, robotics, drone technology, VR, STEM, and
            financial literacy. Our mission is to empower students with hands-on
            learning experiences that enhance creativity, problem-solving, and
            real-world application.
          </p>
        </div>
        </motion.div>
        <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration:1}}
                viewport={{ once: true, amount: 0.2 }}
              >
        <div className="specialize">
          <div className="specialize-con">
            <div>
              <h3 style={{color:"orangered"}}>We specialize in :</h3>
              <ul>
                <li>
                  Curriculum Development: Designing engaging and age-appropriate
                  educational content.
                </li>
                <li>
                  DIY Kits & Equipment: Manufacturing high-quality kits for STEM
                  and Atal Tinkering Labs.
                </li>
                <li>
                  Workshops & Training: Conducting interactive learning programs
                  in schools and after-school centers.
                </li>
                <li>
                  Tech & Finance Education: Providing courses on financial
                  literacy, trading, and market analysis.
                </li>
                <li>
                  VR-Based Learning: Enhancing education with immersive virtual
                  reality experiences.
                </li>
              </ul>
            </div>
            <div>
              <img src={robo_lab} alt="" />
            </div>
          </div>

          <div></div>
          <p>
            <span style={{ marginLeft: "50px" }}>With</span> a strong foundation
            in research, innovation, and industry collaboration, ExpressSpark is
            committed to bridging the gap between theory and practice, ensuring
            that students gain practical skills for the future.
          </p>
        </div>
        </motion.div>
    </div>
  )
}

export default AboutCompany