import React from 'react'
import "./Recipie.scss";
import RecipieCard from '../../Components/RecipieCard/RecipieCard'


 export default function Recipie  ({title})  {
  return (
    <div className='Recipie'>
       <div className="Recipie__titleBar">
        <p className='_headerText'>{title}</p>
      </div>
        <div className="Recipie__card">
            <RecipieCard />
        </div>
        <div className="Recipie__card">
            <RecipieCard />
        </div>
        <div className="Recipie__card">
 <RecipieCard />
        </div>
        <div className="Recipie__card">
            <RecipieCard />
        </div>
        
    </div>
  )
}

