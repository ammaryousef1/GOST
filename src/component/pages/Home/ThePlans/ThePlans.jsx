import React from 'react'
import './ThePlans.scss'
import {CartPlandata } from '../../../assets/data/data'
import CartPlan from './CartPlan'

const ThePlans = () => {
  return (
    <div className='ThePlans'>
          <div className='ThePlans-title'>
              <h1>Choose The Plans</h1>
              <p>Meet our newbies! The lotest templats upioaded to the marketpliace</p>
          </div>

        <div  className='CartPlans'>
          {CartPlandata.map((item) => (
                <CartPlan
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  p={item.p}
                  Demo={item.Demo} 
                  Theme={item.Theme}
                  Support={item.Support}
                  Access={item.Access}
                  Themes={item.Themes}
                  MoneyBack={item.MoneyBack}
              />
          ))}
        </div>

    </div>
  )
}
// #CA4F98
export default ThePlans