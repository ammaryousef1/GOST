import React, { useEffect, useState } from 'react'
import '../../Style/TopSelling.scss';
import { productsData , productsMokups , productsIcons , productsImagesStocks , productsWebTheme  }  from '../assets/data/data'
import Product from '../pages/Home/Products/Product'
import '../../Style/Products.scss'
const TopSelling = () => {
    const [filter , setFilter] = useState("All")
    const [products , setProducts] = useState(productsData)

    useEffect(() => {
        if(filter === "All") {
            setProducts(productsData)
        }
        if(filter === "Icons") {
            setProducts(productsIcons)
        }
        if(filter === "WebTheme") {
            setProducts(productsWebTheme)
        }
        if(filter === "ImagesStocks") {
            setProducts(productsImagesStocks)
        }
        if(filter === "Mockup") {
            setProducts(productsMokups)
        }
    })
  return (
    <div className='TopSelling'>
        <div className="TopSelling-titles">
        <div>
            <h2>Top Selling Products</h2>
            <p>Meet our newbies! The templates uploaded to the marketplace</p>
        </div>

        <div className='category-btn'>
            <button onClick={() => setFilter("All")} className='btn gradient-button'>All</button>
            <button onClick={() => setFilter("Icons")} className='btn gradient-button'>Icons</button>
            <button onClick={() => setFilter("WebTheme")} className='btn gradient-button'>Web Theme</button>
            <button onClick={() => setFilter("ImagesStocks")} className='btn gradient-button'>Images Stocks</button>
            <button onClick={() => setFilter("Mockup")} className='btn gradient-button'>Mockup</button>
        </div>
        </div>

        <div className="all-products">
            { products.map((item) => (
                <Product
                title={item.productName}
                id={item.id}
                imgUrl={item.imgUrl}
                description={item.description}
                price={item.price}
                /> 
            ))}
        </div>
    </div>
  )
}

export default TopSelling