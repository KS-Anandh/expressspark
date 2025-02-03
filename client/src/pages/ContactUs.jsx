import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="contactInfo">
      <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration:.5}}
                viewport={{ once: true, amount: 0.2 }}
              >
            <ContactInfo/>
            </motion.div>
            
      </div>
      <div className="contactForm">
            <ContactForm/>
      </div>
    </div>
  );
};

export default ContactUs;
