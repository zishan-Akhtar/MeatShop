import React from 'react'
import {BsFillStarFill } from "react-icons/bs";
import "./Card.scss";
import { useNavigate } from 'react-router-dom';
const Card = () => {
  const Navigate = useNavigate();
  return (
    <div className='Card _ptr'
  >
      <div className="Card__ImageBox">
        <img src='/Images/Biryanii.png' alt='chicken' />
      </div>
      <div className="Card__content">
        <h1>Chicken Curry <span>400G</span></h1>
      </div>
      <div className="Card__stars">
      <BsFillStarFill />
      </div>
      <div className="Card__paragraph">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing<br></br> elit. Maiores ex non aperiam quam quo harum.</p>
      </div>
      <div className="Card__price">
        <h2>Rs.192<span>Rs.230</span></h2>
      </div>
      <div className="Card__btn"
        onClick={() => {
          Navigate("/Payment");
        }}>
      <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default Card