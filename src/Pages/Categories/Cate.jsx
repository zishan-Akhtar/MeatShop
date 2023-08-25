import React from 'react'
import { Header,Categories, Seller, Review, Foot, Recipie } from '../../Containers'
import "./Cate.scss";
import { CgMenuCheese } from 'react-icons/cg';

function Cate() {
  return (
    <div className='Cate'>
      <Header />
      
      <Categories />
      <div className="Cate__txt">
        <h3>Categories</h3>
      </div>
      <div className="Cate__sel">
        <CgMenuCheese />
      </div>
      <Seller />
      <Seller />
      <Seller />
      <div className="Cate__btn">
        <button>Load More</button>
      </div>
      <Recipie />
      <div className="Cate__rev">
      <Review />
      </div>
      <Foot />
    </div>
  )
}

export default Cate
