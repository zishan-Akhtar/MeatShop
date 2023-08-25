import React from 'react'

import "./Whis.scss";
import List from '../../Components/Whislist/List';
import List2 from '../../Components/WhisList2/List2';

function Whis() {
  return (
    <div className='Whis'>
      <div className="Whis__title">
        <h1>WhisList</h1>
      </div>

  <List2 />
  <List />
  <button>Load More</button>
  
    </div>
  )
}

export default Whis
