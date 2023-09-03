import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Redux/ecomersSlice'


const BasketMenu = ({item}) => {

    const dispatch = useDispatch()

    const deleteItem =()=> {
      dispatch(cartActions.deleteItem(item.id))
    }
  return (
                 <div>
                  <div className='cart-basket'>
                    <img src={item.imgUrl} alt='' />

                    <div className='cart-basket-title'>
                      <h5 className='cart-basket-nameproduct'>Floating 2021 Phone...</h5>
                      <h5>price:{item.price}</h5>
                      <h5>Qunatity{item.quantity}</h5>
                    </div>

                    <div onClick={deleteItem}>  <BsFillTrashFill   /> </div>
                  </div>
               </div>
  )
}

export default BasketMenu