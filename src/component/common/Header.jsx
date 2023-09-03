import React, {  useState } from 'react'
import '../../Style/Navbar.scss'
import logo from '../assets/images/logo.svg'
import Cart from '../assets/images/cart.png';
import { AiOutlineBars ,  AiOutlineShopping  } from "react-icons/ai";
import BasketMenu from '../common/BasketMenu'
import { navlist } from '../assets/data/data';
import {  NavLink } from 'react-router-dom';
import { RiCloseLine  } from 'react-icons/ri';
import { useSelector } from 'react-redux';


const Header = () => {
  const product = useSelector((state) => state.addProdcut.Product)
  const totalAmount = useSelector((state) => state.addProdcut.totalAmount)
  const totalQuantity = useSelector((state) => state.addProdcut.totalQuantity)
  
  const [showCart, setShowCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
 

  return (
    <>
      <header>

      <div className='menu'>
        <AiOutlineBars onClick={() => setToggleMenu(true) } />
        {
          toggleMenu && ( 
            <ul className='nav'>
               <div className='all-NavLinks'>
                <div className='lis'>
                  {navlist.map((item) => (
                    <>
                      <NavLink className='li' to={item.path}>{item.text}</NavLink>
                      </>
                      
                ))} 
                 </div>

                <RiCloseLine  className='ex' onClick={() => setToggleMenu(false)} />
            </div>
           </ul>
          )
        }
      </div>

      <div className='left-side'>
         
          <NavLink className='li' to='/'> <img src={logo} alt='' /></NavLink>

        <ul>
          {navlist.map((item) => (
          <a href={item.path} className='li' >{item.text}</a>
          ))}
        </ul>
       
      </div>
      <div className='right-side'>

          <div className="basket">
            <button className='btn gradient-button' onClick={() => setShowCart(!showCart)}><AiOutlineShopping  /> MY CART ({totalQuantity}) </button>
            <div className='menu-basket'>

            {
            showCart ? <div>
              {product.length===0 ? (
              <div className='showbasket'>
            <div onClick={() => setShowCart(false)}><RiCloseLine /></div>
                <h5>Your Cart Is Empty</h5>
                <img src={Cart} alt="" />
                </div>) : (
            <div className="showbasket-view">
                <div className='showbasket-title'><h4>Photo</h4> <div style={{position: 'relative' , right: '120px' , bottom: '20px' }} onClick={() => setShowCart(false)}><RiCloseLine /></div> <span>Product Name </span></div>
                  <div className='line'></div>
            {
               product.map((item) => (
              <BasketMenu item={item} />
                ))
            }
                  <div className='totalPrice'>Total : {totalAmount} </div>

        </div>
              ) }
            </div> : null
          }
            </div>
          </div>
      </div>

  
      </header>
    </>
  )
}

export default Header


