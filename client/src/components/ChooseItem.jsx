import React from "react";

const ChooseItem = ({title,image,content}) => {
  return (

    <div className="chooseItem">
      <img src={image} alt=""/>
      <h3 style={{color:"rgb(221, 165, 0)"}}>{title}</h3>
      <p>
       {content}
      </p>
    </div>



  );
};

export default ChooseItem;
