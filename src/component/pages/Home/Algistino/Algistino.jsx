import React from 'react'
import './Algistino.scss'
import Algistinobox from './Algistinobox'
const Algistino = () => {
  return (
    <div className='Algistino'>
        <div className='Algistino-title'> 
              <h1>Choose The Plans</h1>
              <p>Meet our newbies! The lotest templats upioaded to the marketpliace</p>
       </div>

     <div className="Algistino-all-box">
        <Algistinobox />
        <Algistinobox />
        <Algistinobox />
     </div>
    </div>
  )
}

export default Algistino