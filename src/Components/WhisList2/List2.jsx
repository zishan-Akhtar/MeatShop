import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri';
import "./List2.scss";
function List2() {
  return (
    <div className='List2'>

           <div className="List2__categories">
        <RiDeleteBinLine size="2rem" className='delete2'/>
        <img src='/Images/Chicken.png' alt='pic' /> 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, esse!</p>
        <h2>Rs.150</h2>
        
      </div>
    </div>
  )
}

export default List2
