import React from 'react'
import Hero from './Hero/Hero'
import Heading from '../../common/Heading'
import Products from './Products/Products'
import Banner from './Banner/Banner'
import TopSelling from '../../common/TopSelling'
import ThePlans from './ThePlans/ThePlans'
import Algistino from './Algistino/Algistino'
import LatestBlog from './LatestBlog/LatestBlog'
const Home = () => {
  return (
    <div>
      <Hero />
      <Heading title="Trending Products" subtitle="Check the hottest designs of the Week. These rising are worth your attention" />
      <Products />
      <Banner />
      <TopSelling />
      <ThePlans />
      <Algistino />
      <LatestBlog />
    </div>
  )
}

export default Home