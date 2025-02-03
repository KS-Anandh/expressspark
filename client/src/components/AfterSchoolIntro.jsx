import React, { useState } from "react";
import ImagesSrolling from "./ImagesScrolling";
import { motion } from "framer-motion";
import close from "../assets/images/close.png";
import { Link } from "react-router-dom";
const AfterSchoolIntro = () => {
    const [showForm,setShowForm]=useState(false);
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
  return (
    <div className="afterSchoolIntro">
        <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
      <div className="intro">
        <h1>
          Transform Your Child’s Learning with ExpressSpark’s After-School
          Program !
        </h1>
        <p>
          <span className="showcase" style={{ fontSize: "25x" }}>
            ExpressSpark’s 3-hour daily after-school program{" "}
          </span>{" "}
          combines academic excellence, future-ready skills, and holistic
          development. Guided by expert mentors, this program equips students
          with the tools to thrive in today’s competitive world. At
          ExpressSpark, we equip your child with essential skills, confidence,
          and knowledge to thrive academically and in the world of technology &
          innovation.
        </p>
        <button className="enquiry-now" onClick={()=>setShowForm(true)}>Enquiry Now</button>
      </div>
         <div className="contactForm" style={{display:showForm?"":"none"}}>
                      <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration:1}}
                                viewport={{ once: true, amount: 0.2 }}
                              >
                      <div className="contact-form enqury-form" style={{background:"lightgrey",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"5"}}>
                           <img src={close} onClick={()=>setShowForm(false)} style={{position:"absolute",top:"10px",right:"10px"}} width={30} height={30} />
                            <h3>Send Message</h3>
                            <input type="text"      onChange={(e)=>setName(e.target.value)} placeholder="Full Name"/>
                            <input type="mail"      onChange={(e)=>setMail(e.target.value)} placeholder="Email" />
                            <textarea id="w3review" onChange={(e)=>setMessage(e.target.value)} name="w3review" placeholder="Type Your Massage" style={{resize:"none"}} rows="4" cols="30">
                            </textarea>
                          
  <button onClick={sendWhatsAppMessage}>Enquiry Now</button>

                      </div>
                      </motion.div>
                    </div>
      </motion.div>
      <div className="imageScrol">
      <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
        <ImagesSrolling />
        </motion.div>
      </div>
    </div>
  );
};

export default AfterSchoolIntro;
