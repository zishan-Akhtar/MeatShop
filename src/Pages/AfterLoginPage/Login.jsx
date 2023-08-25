import React from 'react';
import "./Login.scss";
import { Categories } from '../../Containers';
import Contact from '../../Containers/Contact/Contact'
import Seller from '../../Containers/BestSeller/Seller';
import Review from '../../Containers/Review/Review';
import { About, Meat } from '../../Containers'
import Today from '../../Containers/Today\'Deal/Today';
import Recipie from '../../Containers/RecipieCard/Recipie';
import Foot from "../../Containers/Footer/Foot";
import Nav from '../../Containers/AfterHeader/Nav';

const Login = () => {
  return (
    <div className='Login'>
        <Nav />
        <Meat />
        <Categories />
        <About />
        <Contact />
      <div className='Login__best'>
      <div className="Login__legpeice">
      <img src='/Images/icon5.png' alt='icon' />
      </div>
        <h1>Best Seller</h1>
      </div>
      <Seller />
      <div className="Login__btn">
        <button>See More</button>
      </div>
      <div className='Login__best'>
        
        <h1>Today'Deals</h1>
      </div>
      <Today />
      <div className="Login__btn">
        <button>See More</button>
      
      </div>
<div className="Login__title">
  <h1>Recipie</h1>
</div>
      <Recipie />
      <div className="Login__title2">
  <h1>Real Review by Real People</h1>
</div>
<Review />
<Foot />
    </div>
  )
}

export default Login