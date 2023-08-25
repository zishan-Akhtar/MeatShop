import React from 'react'
 import "./Contact.scss";
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
 export default function Contact ({title})  {
  return (
    <div className='Contact'>
      <div className='Contact__head'>
        <p className='_headerText9'>Why Meat Shop</p>
      
      </div>
    
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
  )
}

