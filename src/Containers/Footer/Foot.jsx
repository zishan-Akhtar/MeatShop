import React from 'react'
import "./Foot.scss";
 import { FaFacebookF } from 'react-icons/fa';
 import { BsInstagram,BsTwitter} from 'react-icons/bs';
 import { AiOutlineYoutube } from 'react-icons/ai';
export default function Foot() {
  return (
    <div className='Foot'>
      <div className="Foot _container">
        <div className="Foot__row">
          <div className="Foot__col">
      <p className='title'>Information</p>
      <p className='path'>Home</p>
      <p className="path">Contact</p>
        <p className="path">About</p>
        <p className="path">Products</p>
        <p className="path">Services</p>
        </div>
<div className="Foot__col">
<div className="Foot__logoBox">
          <img src='/Images/Header-logo half.png' alt='logo' />
          <p className='title'>Meat Shop</p>
       <p className='path'>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto libero
           provident repudiandae <br></br>dolore assumenda dolores ratione deleniti
           quisquam voluptatibus at.
         </p>
         <div className="Foot__socileIcon">
         <div className="Foot__icon">
           <AiOutlineYoutube  />
          </div>
          <div className="Foot__icon">
          <BsInstagram  />
          </div>
          <div className="Foot__icon">
          <BsTwitter />
          </div>
          <div className="Foot__icon">
          <FaFacebookF  />
          </div>
</div>


        </div>
        </div>
<div className="Foot__col">
<p className='title'>Contact</p>
      <p className='path'>Email</p>
      <p className="path">Whatsapp</p>
        <p className="path">Twitter</p>
        <p className="path">Instagram</p>
        <p className="path">Services</p>
</div>
       
        </div>
        <div className="Foot__row">
          
          <div className=' Foot__col-sm'>
      
            &copy;{new Date().getFullYear()}Terms and condition |Privacy and Policy 
          </div>
        </div>
      
        </div>
    </div>
  )
}
