import React from "react";
import { motion } from "framer-motion";
const Service = ({ image, title, content, size, bg }) => {
  return (
  
      <div className="service" style={{ background: bg }}>
        <img
          src={image}
          alt=""
          width={size ? size : 250}
          height={size ? size : 250}
        />
        <div className="service-info">
          <center style={{ margin: "20px 0px" }}>
            <h2>{title}</h2>
          </center>
          <p>{content}</p>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"10px"}}>
          <button>Learn</button>
          </div>
        </div>
      
      </div>
   
  );
};

export default Service;
