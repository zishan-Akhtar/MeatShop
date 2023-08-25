import React from 'react';
import "./Categories.scss";
import { useNavigate } from 'react-router-dom';
 const items = [
    {
        id: 1,
        title: "Chicken",
        icon : "/Images/icon5.png",
    },
    {
        id: 2,
        title: "Exotic",
        icon : "/Images/icon4.png",
    },
    {
        id: 3,
        title: "See food",
        icon : "/Images/icon3.png",
    },
    {
        id: 4,
        title: "Mutton",
        icon : "/Images/icon2.png",
    },
    {
        id: 5,
        title: "Ready to Eat",
        icon : "/Images/icon5.png",
    },
    {
        id: 6,
        title: "Chicken",
        icon : "/Images/icon2.png",
    },
    {
        id: 7,
        title: "Exotic",
        icon : "/Images/icon4.png",
    },
    {
        id: 8,
        title: "Mutton",
        icon : "/Images/icon2.png",
    },
 ]
 export default function Categories () {
    const Navigate = useNavigate();
  return (
    <div className='Categories'
    
    onClick={() => {
      Navigate("/pop");
    }}>
     {items.map((value) =>(
      <div className="Categories__box">
<span className='Categories__icons'>
    <img 
    src={value.icon }
    width={"100%"}
    height="100%"
    alt='icon' />
</span>
<p className='heading'>{value.title}</p>
            </div>
      
      
      ))}
    </div>
  )
}

