import React from 'react'
import './ThePlans.scss'
const CartPlan = ({id , title , price , p , Demo , Theme , Support , Access , Themes , MoneyBack }) => {
  return (
    <div  className="CartPlan" key={id}>
        <h2 className="title">{title}</h2>
        <div className="price">
            <p>$<h1>{price}</h1></p>
            <span>/user per month</span>
        </div>
        <p className='paragraph'>{p}</p>
        <button className='btn gradient-button'>GET STARTED</button>
        <div className='check'>
            <h5><span>{Demo}</span> Demo Content Install</h5>
            <h5><span>{Theme}</span> Theme Updates</h5>
            <h5><span>{Support}</span> Support And Updates</h5>
            <h5><span>{Access}</span> Access All Themes</h5>
            <h5><span>{Themes}</span>  All Themes For Life</h5>
            <h5>sp 30 Days Money Back</h5>
        </div> 
    </div>
  )
}

export default CartPlan