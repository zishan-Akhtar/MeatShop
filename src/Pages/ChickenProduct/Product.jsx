import React from 'react'
import Header from "../../Containers/Header/Header";
import { Categories, Foot, Recipie, Review, Seller } from '../../Containers';
import Buy from '../../Containers/BuyNow/Buy';
import "./Product.scss";
const Product = () => {
  return (
    <div  className='Product'>
      <Header />
      <Categories />
      <Buy />
      <div className="Product__rec">

      <Recipie title={"Recipie Chicken"} />
      </div>
      <div className='Product__cards'>
      <Seller  title={"Shopping"}/>
      </div>
      <div>
<div className="Product__review">

      <Review />
</div>
      </div>
      <Foot />
    </div>
  )
}

export default Product
