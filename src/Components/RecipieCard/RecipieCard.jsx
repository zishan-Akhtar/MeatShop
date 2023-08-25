import React from "react";
import {BsFillStarFill } from "react-icons/bs";
import "./RecipieCard.scss";
const RecipieCard = () => {
  return (
    <div className="RecipieCard">
      <div className="RecipieCard__ImagesBox">
        <img src="/Images/vegitable.png" alt="veg" />
      </div>
      <div className="RecipieCard__heading">
        <h1>
          Chicken Dum Biryani <span>Rs.198</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur <br></br>adipisicing elit. Voluptatem
          quaerat ea nam odit, <br></br>dolorem consequuntur ipsa debitis
          corrupti<br></br> sunt, delectus quidem dolore nihil ipsam aliquid<br></br> molestiae
          repudiandae architecto quia! Quaerat?15
        </p>
      </div>
      <div className="RecipieCard__rating">
      <BsFillStarFill  size="1rem" className="icon"/><span>4.0</span>
      </div>
    </div>
  );
};

export default RecipieCard;
