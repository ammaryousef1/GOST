import React from 'react'
import '../../../../Style/Card.scss'
const Card = (props) => {

  return (
    <div className='Card'>
      <img src={props.img} alt='' />

      <div className='text'>
        <h4>{props.title}</h4>
        <span>{props.items}</span>
      </div>
    </div>
  )
}

export default Card

