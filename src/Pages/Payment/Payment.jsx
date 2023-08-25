import React from 'react';
import "./Payment.scss";
import { useNavigate } from 'react-router-dom';
import { Header } from '../../Containers'
import { BiCreditCard } from 'react-icons/bi';
import { SiPaytm } from 'react-icons/si';
import { GrBundle } from 'react-icons/gr';
function Payment() {
    const Navigate = useNavigate();
  return (
    <div className='Payment'>
      <Header />
  
      <div className="Payment__shipping">
        <h2>Payment Method</h2>
      </div>
      <div className="Payment__card">
        <input type='radio' />
        <BiCreditCard size="2rem" />
        <input type='radio' />
        <SiPaytm  size="2em"/>
        <input type='radio' />
        <GrBundle  size="2rem"/>
      </div>
      <div className="Payment__det">
        <h2>Payment Details</h2>
        <input type='text' placeholder='Enter Your Name' /><br></br>
        <input type='text' placeholder='Enter Card Number' /><br></br>
        <input type='text' placeholder='Expire' /><br></br>
        <input type='text' placeholder='CV' />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, officiis?</p>
      </div>
      <div className="Payment__btn"
        onClick={() => {
          Navigate("/");
        }}>
        <button>Back</button><span><button>Continue </button></span>
      </div>
     <div className="Payment__pic">
        <img src='/Images/whiteChicken.png' alt='white' />
     </div>
    </div>
  )
}

export default Payment
