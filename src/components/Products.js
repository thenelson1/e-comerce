import React from 'react'
import Product from './Product';
import productOne from '/home/thenelson/Desktop/frontend/projects/reactApps/e-commerce/src/images/product-one.jpg'
import productTwo from '/home/thenelson/Desktop/frontend/projects/reactApps/e-commerce/src/images/product-two.jpg'
import productThree from '/home/thenelson/Desktop/frontend/projects/reactApps/e-commerce/src/images/product-three.jpg'


const Products = () => {
  return (
    <div className='products'>
        <div className='product'>
        <img src={productOne} alt="" />
        <h5>TEQUILA SUNRISE MOSSY MAXI SLIP DRESS</h5>
        <p>$350</p> 
    </div>
    <div className='product'>
        <img src={productTwo} alt="" />
        <h5>TEQUILA SUNRISE MOSSY MAXI SLIP DRESS</h5>
        <p>$350</p> 
    </div>
    <div className='product'>
        <img src={productThree} alt="" />
        <h5>TEQUILA SUNRISE MOSSY MAXI SLIP DRESS</h5>
        <p>$350</p> 
    </div>
    <div className='product'>
        <img src={productOne} alt="" />
        <h5>TEQUILA SUNRISE MOSSY MAXI SLIP DRESS</h5>
        <p>$350</p> 
    </div>
    </div>
  )
}

export default Products