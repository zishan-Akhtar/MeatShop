import React from 'react';
import "./Header.scss";
import { CgProfile } from 'react-icons/cg';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { AiOutlineSearch  } from 'react-icons/ai';
import {AiOutlineExclamation}  from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
function Header () {
  const Navigate = useNavigate();
  return (
    <div className='Header _container'>
      <div className="Header__logo">
       <img src='/Images/Header-logo.png'
        alt='logo'
        className='_ptr'
        onClick={() => {
          Navigate("/");
        }}
        />
      
    </div>
  
   <div className="Header__icons">
   <p >About Us</p>
   <p>Contact</p>
   <span>

    <CgProfile  />
   </span>
  <span>    
  <BsFillCartCheckFill />
    </span>
    <span>
    <AiOutlineSearch />
    </span>
   </div>
   <div className="Header__mobileMenu">
        <HiMenu />
      </div>
      
    </div>
  )
}

export default Header



