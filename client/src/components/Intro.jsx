import React, { useState, useEffect } from "react";
import imag_1 from "../assets/images/robo_1.png";
import imag_2 from "../assets/images/robo_2.jpg";
import imag_3 from "../assets/images/robo_3.jpg";
import imag_4 from "../assets/images/robo_4.png";
import close from "../assets/images/close.png";
import ProfileFlow from "./FlowImages";
import Services from "./Services";
import { motion } from "framer-motion";
import AboutCompany from "./AboutCompany";
import WhyChoose from "./WhyChoose";
import { Link } from "react-router-dom";

const images = [imag_1, imag_2, imag_3, imag_4];

const Intro = () => {
  const [currentImages, setCurrentImages] = useState(images);
  const [flipCount, setFlipCount] = useState(0);
  const [showForm, setShowForm] = useState(false);

    const [name,setName]=useState(null);
    const [mail,setMail]=useState(null);
    const [message,setMessage]=useState(null)
  
  
    function sendWhatsAppMessage() {
      if (!name || !mail || !message) {
        alert("Please fill in all fields.");
        return;
      }
      let whatsappMessage = `Hello, my name is ${name}.%0AMy email is ${mail}.%0AI am interested in knowing more details.%0A%0AMessage: ${message}%0A%0ALooking forward to your response.%0AThank you!`;
      let whatsappURL = `https://wa.me/${9346813383}?text=${whatsappMessage}`;
      window.open(whatsappURL, "_blank");
    }
  const handleAnimationEnd = () => {
    setCurrentImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.push(newImages.shift());
      return newImages;
    });
    setFlipCount(flipCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => {
        const newImages = [...prevImages];
        newImages.push(newImages.shift());
        return newImages;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="intro-banner">
        <div className="main-banner">
          <div className="bannner-images">
            {currentImages.map((image, index) => (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  key={index}
                  src={image}
                  alt={`banner-image-${index}`}
                  className="flip-image"
                  onAnimationEnd={handleAnimationEnd}
                />
              </motion.div>
            ))}
          </div>

          <div className="bannner-info">
            <div className="banner-header">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 style={{ marginBottom: "20px", color: "black" }}>
                  TRANSFORMING EDUCATION WITH STEAM LEARNING
                </h3>
                <p>
                   <span
                    style={{
                      marginLeft: "30px",
                      color: "yellow",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    We are{" "}
                  </span>
                  excited to introduce <span
                    style={{
                      color: "orangered",
                      fontWeight: "800",
                      fontSize: "17px",
                    }}
                  >ExpressSpark </span>, a forward-thinking
                  initiative designed to seamlessly integrate cutting-edge
                  technologies and STEAM (Science, Technology, Engineering,
                  Arts, and Mathematics) learning into school curriculums. In
                  today’s fast-evolving world, equipping students with the tools
                  to succeed in the future is more essential than ever. At
                  ExpressSpark, we aim to bridge the gap between traditional
                  education and modern technological advancements, empowering
                  students to thrive in an innovation-driven world.
                </p>
                <div className="btns">
                
  <button onClick={()=>setShowForm(true)} >Enquiry Now</button>


                </div>
              </motion.div>
            </div>

            <div className="banner-flow-images">
              <ProfileFlow />
            </div>
          </div>
          <div
            className="contactForm"
            style={{ display: showForm ? "" : "none" }}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className="contact-form enqury-form"
                style={{
                  background: "lightgrey",
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: "5",
                }}
              >
                <img
                  src={close}
                  onClick={() => setShowForm(false)}
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                  width={30}
                  height={30}
                />
                <h3>Send Message</h3>
                <input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} />
                <input type="mail" placeholder="Email" onChange={(e)=>setMail(e.target.value)} />
                <textarea
                onChange={(e)=>setMessage(e.target.value)}
                  id="w3review"
                  name="w3review"
                  placeholder="Type Your Massage"
                  style={{ resize: "none" }}
                  rows="4"
                  cols="30"
                ></textarea>
              
                  <button onClick={sendWhatsAppMessage}>Submit</button>
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="achive-comp">
        <WhyChoose />
      </div>

      <div className="services">
        <center style={{ margin: "30px 0px" }}>
          <h1>OFFERINGS SERVICES</h1>
        </center>
        <Services />
      </div>
    </div>
  );
};

export default Intro;
