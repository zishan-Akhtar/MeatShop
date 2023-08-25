import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri';
import "./List.scss"
function List() {
  return (
    <div className='List'>
          <div className="List__categories">
        <RiDeleteBinLine size="2rem" className='delete'/>
        <img src='/Images/Biryanii.png' alt='pic' /> 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, esse!</p>
        <h2>Rs.150</h2>
      </div>
    </div>
  )
}

export default List
