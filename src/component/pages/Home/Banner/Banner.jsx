import React from 'react'
import './Banner.scss'
import { banner } from '../../../assets/data/data'
import banner1 from '../../../assets/images/banner1.png'
import banner3 from '../../../assets/images/banner3.png'
const Banner = () => {
  return (
    <>
     <section className='banner'>
      <div className="content">
      <div className="img">
        <img src={banner1} alt='' />
        </div>
        <div className="banner-title">
          <h3>Simple iPhone</h3>
          <h3>Mockups Design PSD, Ai EPS</h3>
          <p>Side 30% Off for Members</p>
          <button className='gradient-button btn'>SHOP NOW</button>
        </div>
      </div>
      <div className="content">
        <div className="img">
        <img src={banner3} alt='' />
        </div>
        <div className="banner-title">
          <h3>Simple iPhone</h3>
          <h3>Mockups Design PSD, Ai EPS</h3>
          <p>Side 30% Off for Members</p>
          <button className='gradient-button btn'>SHOP NOW</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Banner


