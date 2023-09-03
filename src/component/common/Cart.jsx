import React from 'react'
import '../../Style/Cart.scss'
import { useParams } from 'react-router-dom'
import '../../Style/Cart.scss'
import { productsData } from '../assets/data/data'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../Redux/ecomersSlice'
const Cart = () => {
  const {id} = useParams()
  const product = productsData.find((item) => item.id === id)

  const dispatch = useDispatch()


  const addProduct = ()=> {
    dispatch(cartActions.addItem({
      title:product.title,
      id: product.id,
      imgUrl: product.imgUrl,
      price: product.price,
      quantity:product.quantity,
      totalprice:product.price,
    }));
  }
  
  const handlePlus = () => {
    dispatch(cartActions.handlePlus({
      id: product.id,
      price: product.price,
      totalprice:product.price,
      quantity:product.quantity,
    }))
  }

  const handleMinus = () => {
    dispatch(cartActions.handleMinus({
      id: product.id,
      price: product.price,
      totalprice:product.price,
      quantity:product.quantity,
    }))
  }
  
  return (
    <>
    <div className='Cart' >

        <div className='left-side' >
          <img src={product.imgUrl} alt='' />
        </div>

        <div className="right-side">
          <h1>{product.productName}</h1>
          <span  className='price'>$ {product.price}</span>
          <h5>{product.description}</h5>

          <div className='buttons'>
          <button onClick={addProduct} className='addToCart'>Add to Cart</button> 
                <div className='btn-quantity'  >
                    <span ><AiOutlinePlus onClick={handlePlus}/></span>
                    <span><AiOutlineMinus onClick={handleMinus} /></span>
                </div>
          </div>

          <div className="Cart-Description">
            <h5>PRODUCTS DESCRIPTION</h5>
            <span>{product.descCart}</span>
          </div>

          <div className='product-details'>
            <h5>PRODUCTS DETAILS</h5>
            <div><span>Material: plastic</span> {product.details.material}</div>
            <div>Legs: Lacquered Oak And Black Painted Oak</div>
            <div>Dimensions And weight: {product.details.weight} ,  height: {product.details.height}</div>
            <div><span>depth:</span> {product.details.depth}</div>
            <div><span>height:</span> {product.details.height}</div>
            <div><span>weight:</span> {product.details.weight}</div>
          </div>

        </div>
    </div>
    </>
  )
}

export default Cart

