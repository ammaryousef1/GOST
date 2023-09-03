import React from 'react'
import Product from '../pages/Home/Products/Product'
import '../../Style/SearchItem.scss'
const SearchItem = ({ value  , product }) => {
  return (
    <>
    <div className='div-searchItem'>
    <section className='searchItem'>
    
      {product.filter((item) => { 
        
        const searchkey = value.toLowerCase()
        const title = item.productName.toLowerCase()

        return searchkey && title.startsWith(searchkey) && title !== searchkey
       }).slice(0,10).map((item) => (
        <Product    title={item.productName}
        id={item.id}
        imgUrl={item.imgUrl}
        description={item.description}
        price={item.price} />
       ))}
       
      </section>
      </div>
      </>

  )
}

export default SearchItem