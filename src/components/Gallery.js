import React from 'react'
import './collections.css'


import productOne from '../images/hero1.jpg'
import productTwo from '../images/hero2.jpg'
import productThree from '../images/hero3.jpg'

const Gallery = () => {
  return (
    <div className='gallery'>
        <img className='gallery-img-one' src={productOne} alt="" />
        <img src={productTwo} alt="" />
        <img src={productThree} alt="" />
    </div>
  )
}

export default Gallery