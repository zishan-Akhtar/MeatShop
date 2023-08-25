import React from 'react'
import Card from '../../Components/ChickenCard/Card'
import "./Seller.scss";

 export default function Seller ({title}){
  return (
    <div className='Seller'>
      <div className="Seller__titleBar">
        <p className='_headerText'>{title}</p>
      </div>
        <div className="Seller__card">
        <Card />
        </div>
        <div className="Seller__card2">
            <Card />
        </div>
        <div className="Seller__card3">
            <Card />
        </div>
        <div className="Seller__card4">
            <Card />
        </div>
    </div>
  )
}


