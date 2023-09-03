import React, { useState } from 'react'
import  { AiOutlineSearch } from "react-icons/ai";
import '../../../../Style/Hero.scss'
import Card from './Card';
import { productsData } from '../../../assets/data/data';
import Cardweb1 from '../../../assets/images/022ffc144984011.62963e774c25e.jpg'
import Cardweb2 from '../../../assets/images/6eaf18144984011.62963e77480ca.jpg'
import Cardweb3 from '../../../assets/images/8228a6144984011.62963e774a6ca.jpg'
import Cardweb4 from '../../../assets/images/da3a90144984011.62963e774afae.jpg'
import Cardweb5 from '../../../assets/images/fd500e144984011.62963e7749028.jpg'
import SearchItem from '../../../common/SearchItem'
const Hero = () => {

  const [value , setvalue] = useState('')
  const onChange = (e) => {
    setvalue(e.target.value)
  }
  


  return (
    <>
   <div className="hero">

    <div className='title'> 
     <h1> Over <span>6,500</span> Curated Design  </h1>
     <h1>Resources, <span>Graphic & Website</span> Templates </h1>
    </div>
    
    <p className='p' >
      High-quality Design Them for personal or commercial use contains 6k + items in 100 categores
    </p>
      <div className='search'>
        <div className='search-npt'>
        <span>All Categories  </span>
          <input type='text' placeholder='Search products....' onChange={onChange} value={value} />
          <AiOutlineSearch  className='icon-search'  />
        </div>
        <SearchItem product={productsData} value={value}  />
      </div>
     
    <p className='p'>
      Examples:Mockup, PSD, theme Design, Image...
    </p>
  </div>

  <div className='cards'>
      <Card title="Web Themes" img={Cardweb1} items="5 items" />
      <Card title="Ul Design" img={Cardweb2} items="12 items" /> 
      <Card title="3D Models" img={Cardweb3} items="12 items" />
      <Card title="Image Stack" img={Cardweb4} items="15 items" />
      <Card title="Mockup Design" img={Cardweb5} items="7 items" />
  </div>
  </>
  )
}

export default Hero


