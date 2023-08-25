import React from "react";
import "./Buy.scss";
import { BsFillStarFill } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
const data =[{
  id: 1,
  title: "Fast Delivery",
  icon: "/images/helpicon1.png",
},
{
id: 2,
title: "24/7",
icon: "/images/helpicon2.png",
},
{
  id: 3,
  title: "Services",
  icon: "/images/helpicon3.png",
  },
  {
      id: 4,
      title: "Payment Security",
      icon: "/images/helpicon4.png",
      },
]
 export default function Buy  () {
  return (
    <div className="Buy">
      <div className="Buy__pic">
        <img src="/Images/legpieces.png" alt="chicken" />
      </div>
      <div className="Buy__title">
        <h1>Chicken Curry - cut small piece</h1>
      </div>
      <div className="Buy__stars">
        <BsFillStarFill size="1.5rem" />
        <BsFillStarFill size="1.5rem" />
        <BsFillStarFill size="1.5rem" />
        <BsFillStarFill size="1.5rem" />
        <BsFillStarFill size="1.5rem" />
        <span>(4 reviews)</span>
      </div>
      <div className="Buy__dummy">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
          nesciunt.<br></br> 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
          nesciunt.<br></br>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
          nesciunt.<br></br>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
          nesciunt.<br></br> 
        </p>
      </div>
      <div className="Buy__price">
        <h1>RS.145.00 <span>
            <MdAddCircle />
            </span>
            <span>1</span>
            <span>
                <MdRemoveCircle />
            </span>
            </h1>
      </div>
      <div className="Buy__btn">
        <button>BuY Now</button><span><button>Add To Cart</button></span>
      </div>
      <div className="Buy__map">
      {data.map((value) =>(
      <div className="Contact__boxs">
<span className='Contact__icon'>
    <img 
    src={value.icon }
    width={"100%"}
    height="100%"
    alt='icon' />
</span>
<div className="Contact__title">

<p>{value.title}</p>
</div>
            </div>
      
      
      ))}
      </div>
    </div>
  );
};

