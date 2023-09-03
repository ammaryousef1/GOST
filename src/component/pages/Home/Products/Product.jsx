import React, { useState } from 'react'
import '../../../../Style/Products.scss'
import { AiOutlineSearch ,  AiOutlineHeart ,  AiOutlineShopping, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import {cartActions} from '../../../Redux/ecomersSlice'
import { Link  } from 'react-router-dom';

const Product = (props) => {
  

    const [openImage , setOpenImage] = useState(false)
    const dispatch = useDispatch()

    const addProduct = ()=> {
      dispatch(cartActions.addItem({
        title:props.title,
        id: props.id,
        imgUrl: props.imgUrl,
        price: props.price,
        quantity:props.quantity,
        totalprice:props.price,
      }));
    } 
  return (
   
    <div>
    
    
      <section className='products-item'  >
         <div className='image'>
         <Link to={`/Cart/${props.id}`}>  <img   src={props.imgUrl} alt='' />     </Link>
          <div className="overlay">
           <button onClick={() => setOpenImage(!openImage)}>
               <AiOutlineSearch />
            </button>
            <button>
              <AiOutlineHeart />
             </button>
            <button>
               <AiOutlineShopping onClick={addProduct} />
            </button>
           </div>
         </div>
         <div className='title'>
           <h4>{props.title}</h4>
           <p>{props.description}</p>
           <h4>Price : ${props.price}</h4>
         </div>
       </section>

       {
        openImage && (
            <div className='modal-overlay'>
                <div className='modal'>
                   <img  src={props.imgUrl} alt="" />
                    <button className="close-button" onClick={() => setOpenImage(false)}>
                        <AiOutlineClose />
                    </button>
                </div> 
            </div>
        )
       }
     </div>

  )
}

export default Product