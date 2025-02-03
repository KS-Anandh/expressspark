import React, { useState } from "react";
import location from '../assets/images/location.png'
import telephone from '../assets/images/telephone.png'
import email from '../assets/images/email.png'
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name,setName]=useState(null);
  const [mail,setMail]=useState(null);
  const [message,setMessage]=useState(null)


  function sendWhatsAppMessage() {
    if (!name || !mail || !message) {
      alert("Please fill in all fields.");
      return;
    }
    let phoneNumber = "919876543210"; 
    let whatsappMessage = `Hello, my name is ${name}.%0AMy email is ${mail}.%0AI am interested in knowing more details.%0A%0AMessage: ${message}%0A%0ALooking forward to your response.%0AThank you!`;
    let whatsappURL = `https://wa.me/${9346813383}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  }





  return (
    <div className="contactForm">
      <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration:1}}
                viewport={{ once: true, amount: 0.2 }}
              >
      <div className="contact-info">
        <div className="item">
          <img src={location} alt="" />
          <div className="info">
            <p className="oranged">Address</p>
            <p>PN Colony Road</p>
            <p>Srikakulam,Andhra Pradesh</p>
            <p>532001</p>
          </div>
        </div>
        <div className="item">
          <img src={telephone} alt="" />
          <div className="info">
          <p className="oranged">Mobile Number</p>
          <p>+91 9346813383</p>
          </div>
        </div>
        <div className="item">
          <img src={email} alt="" />
          <div className="info">
          <p className="oranged">Mail Id</p>
          <p>exresssparkinstitutions@gmail.com </p>
          <p>chakrisai@gmail.com</p>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration:1}}
                viewport={{ once: true, amount: 0.2 }}
              >
      <div className="contact-form">
            <h3>Send Message</h3>
            <input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="mail" placeholder="Email" onChange={(e)=>setMail(e.target.value)}/>
            <textarea id="w3review" onChange={(e)=>setMessage(e.target.value)} name="w3review" placeholder="Type Your Massage" style={{resize:"none"}} rows="4" cols="30">
            </textarea>      
  <button onClick={sendWhatsAppMessage}>Enquiry Now</button>
      </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
