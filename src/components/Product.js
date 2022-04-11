import React from 'react'
import productOne from '/home/thenelson/Desktop/frontend/projects/reactApps/e-commerce/src/images/product-one.jpg'

const Product = () => {
  return (
    <div className='product'>
        <img src={productOne} alt="" />
        <h5>TEQUILA SUNRISE MOSSY MAXI SLIP DRESS</h5>
        <p>$350</p> 
    </div>
  )
}

export default Product