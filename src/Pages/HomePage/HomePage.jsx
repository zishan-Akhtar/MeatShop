import React from 'react'
import "./HomePage.scss";
import "./HomePage.css"
import { useNavigate } from 'react-router-dom';

import Header from '../../Containers/Header/Header'
import { About, Categories, Meat } from '../../Containers'
import Contact from '../../Containers/Contact/Contact'
import Seller from '../../Containers/BestSeller/Seller'
import Today from "../../Containers/Today'Deal/Today"
import Recipie from '../../Containers/RecipieCard/Recipie';
import Review from '../../Containers/Review/Review';
import Foot from "../../Containers/Footer/Foot";

export default function HomePage () {
  const Navigate = useNavigate();

  return (
    <div className='HomePage'>
      <Header />
        <Meat />
        <div className="HomePage__meatShop">
        <p className='titleText'>Meat Shop</p>
        <p className='_subText'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus
          magnam ex repudiandae sint,<br></br> liberok odit quidem necessitatibus maxime?
          Explicabo <br></br>impedit vero quam reiciendis officia.
        </p>
        <button className='btnRedFill'>Buy Now</button>
        <button className='_btnRedFill'>Categories</button>
        </div>
        <Categories />
       <About />
    
       <div className="_Container">
      <Contact  />
  </div>
        
  
      
      <div className="_Container">
        
      <Seller  title={"BestSeller"}/>
      
      </div>
      <div className="HomePage__btn"
         onClick={() => {
          Navigate("/categories");
        }}>
        <button className='__btnRedFill'>See More</button>
      
      </div>
      <div className="_Container">
      <Today  title={"Today'Deal"}/>
      <div className="HomePage__btnn" onClick={() => {
          Navigate("/categories");
        }}>
        <button className='__btnRedFill'>See More</button>
      
      </div>
      </div>
      <div className="_Container">
        
        <Recipie title={"Recipie"}/>
        </div>
        <Review />
      

<Foot />  
    </div>
  )
}