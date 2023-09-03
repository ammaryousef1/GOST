import React from 'react'
import {   productsData } from '../../../assets/data/data';
import '../../../../Style/Products.scss'
import Product from './Product';


const Products = () => {

  return (
    <div className='all-products'>
         {productsData.map((item) =>(
            <Product
             title={item.productName}
             id={item.id}
             imgUrl={item.imgUrl}
             description={item.description}
             price={item.price}
             /> 
        ))}
    </div>
  )
}

export default Products