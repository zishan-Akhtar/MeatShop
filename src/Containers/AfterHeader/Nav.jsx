import React from 'react';
import "./Nav.scss";
import { CgProfile } from 'react-icons/cg';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { AiOutlineSearch  } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='Nav'>
      <div className="Nav__logo">
       <Link to='/'><img src='/Images/Header-logo.png' alt='logo' /></Link>
        <h1>About us<span>Categories</span></h1>
    
      </div>
     
   <div className="Nav__icons">
   <span><img src='/Images/line.png' alt='line' /></span>
    <CgProfile size="2rem"  />
    <span><img src='/Images/line.png' alt='line' /></span>
    </div>
    <div className="Nav__icon2">

    <BsFillCartCheckFill size="2rem" />
    <span><img src='/Images/line.png' alt='line' /></span>

    </div>
    <div className="Nav__icon3">
    <AiOutlineSearch  size="2rem"/>
    <span><img src='/Images/line.png' alt='line' /></span>
   </div>
   <div className="Nav__btn">
    <Link to="/AboutPage"><button>My Profile</button></Link>
   </div>
   <div className="Nav__btn2">
    <button>Log Out</button>
   </div>

      
    </div>
  )
}

export default Nav