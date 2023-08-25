import React from 'react'
import "./Today.scss";
import Card from '../../Components/ChickenCard/Card'

  export default function Today  ({title}) {
  return (
    <div className='Today'>
        <div className="Today__titleBar">
        <p className='_headerText'>{title}</p>
      </div>
        <div className="Today__card">
            <Card />
        </div>
        <div className="Today__card2">
         <Card />
        </div>
        <div className="Today__card3">
          <Card />
        </div>

        <div className="Today__card4">
        <Card />
        </div>
    </div>
  )
}

