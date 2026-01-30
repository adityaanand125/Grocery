import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Product from '../Product/Product'
import Discount from '../Discount/Discount'
import Process from '../Process/process'
import Testimonial from '../Testimonial/Testimonial'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
    <Category/>
    <Values/>
    <Product/>
    <Discount/>
    <Process/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}

export default Home
