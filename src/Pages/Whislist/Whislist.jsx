import React from 'react'
import { Categories, Foot, Header, Review } from '../../Containers'
import Whis from '../../Containers/WhissList/Whis'
import "./Whislist.scss";

function Whislist() {
  return (
    <div className='Whislist'>
      <Header />
  
      <Categories />
      <Whis />
      <div className="Whislist__review">
      <Review />
      </div>
     
      <Foot />
    </div>
  )
}

export default Whislist
