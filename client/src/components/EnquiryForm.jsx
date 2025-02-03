import React from "react";

import { motion } from "framer-motion";

const EnquiryForm = ({show}) => {
  return (
    <div className="contactForm" >
      <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration:1}}
                viewport={{ once: true, amount: 0.2 }}
              >
      <div className="contact-form " style={{position:"absolute",top:"50%",left:"50%",transform:"translate(50%,50%)"}}>
            <h3>Send Message</h3>
            <input type="text" placeholder="Full Name"/>
            <input type="mail" placeholder="Email" />
            <textarea id="w3review" name="w3review" placeholder="Type Your Massage" style={{resize:"none"}} rows="4" cols="30">
            </textarea>
            <button>Submit</button>
      </div>
      </motion.div>
    </div>
  );
};

export default EnquiryForm;
