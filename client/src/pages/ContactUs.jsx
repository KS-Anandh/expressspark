import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <>
    <Helmet>
        <title> Contact Us – Learn Robotics, Coding & STEM</title>
        <meta
          name="description"
          content="Express Spark provides hands-on Robotics, Coding, and STEM education for students. Join our school programs, test series, and workshops."
        />
        <meta property="og:title" content=" Contact Us – Robotics & STEM for Students" />
        <meta
          property="og:description"
          content="Join Express Spark for cutting-edge learning in Robotics, Coding, IoT and more – from school to real-world skills."
        />
        <meta property="og:url" content="https://www.expressspark.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.atlantaparent.com/wp-content/uploads/2018/01/iStock-653876434.jpg" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Express Spark",
              "url": "https://www.expressspark.in",
              "alternateName": "ExpressSpark"
            }
          `}
        </script>
      </Helmet>
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
      </>
  );
};

export default ContactUs;
