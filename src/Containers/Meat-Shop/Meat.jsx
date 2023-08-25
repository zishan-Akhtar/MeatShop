import React from "react";
import "./Meat.scss";
import { useNavigate } from 'react-router-dom';
function Meat () {
  const Navigate = useNavigate();
  return (
    <div className="Meat ">
      <div className="Meat__shadow">
        <img src="/Images/Shadow2.png" alt="shadow" />
      </div>
      <div className="Meat__picture">
        <img src="/Images/Meat image.png" alt="meat" />
      
      </div>
      <div className="Meat__title"
      >
      
        <div className="_ptr"  
         onClick={() => {
          Navigate("/Payment");
        }}>
        {/* <button>Buy Now</button> */}
        </div>

      </div>
      <div className="Meat__btn"
      
         onClick={() => {
           Navigate("/categories");
         }}>
        {/* <button>Categories</button> */}
      </div>
    </div>
  );
};

export default Meat;
