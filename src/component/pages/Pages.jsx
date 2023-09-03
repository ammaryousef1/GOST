 import React from 'react'
 import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
 import Home from './Home/Home'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Cart from '../common/Cart'
import Shop from './Shop/Shop'
import Blog from './Blog/Blog'
 const Pages = () => {
   return (
    <>
    <Router>
      <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart/:id' element={<Cart />} /> 
        <Route path='/Shop' element={<Shop />} /> 
        <Route path='/Blog' element={<Blog />} /> 
      </Routes>
      <Footer />   
    </Router>
    </>
   )
 }
 
 export default Pages