import React from 'react'
import './collections.css'
import { BsArrowRight } from 'react-icons/bs';


import productOne from '../images/hero1.jpg'
import productTwo from '../images/hero2.jpg'
import productThree from '../images/hero3.jpg'


const Collections = () => {

    const [list, setList] = React.useState(true)

    function toggleList(){ 
        setList(prevState => !prevState)
    }

  return (
    <div>
        <div className="collections">

            <div className='product'>
                <div className="side-care">
                    <div className="side-care-header">
                        <h2>Face</h2>
                        <h3 onClick={toggleList}>{ list ? '-' : '+'}</h3>
                    </div>
                    <hr/>
                    { list && <div className="side-care-list">
                        <h4>Cleansers & Toners</h4>
                        <h4>Face Serums</h4>
                        <h4>Moisturizer</h4>
                        <h4>Eye care</h4>
                        <h4>Lips and Neck care</h4>
                        <h4>Cleansers & Toners</h4>
                        <h4>Face Serums</h4>
                        <h4>Moisturizer</h4>
                        <h4>Eye care</h4>
                        <h4>Lips and Neck care</h4>
                        <div className="view-all-container">
                            <h5>View all product</h5>
                            <BsArrowRight className='pointer' />
                        </div>
                    </div>}
                </div>
                <div className="side-img">
                    <img src={productOne} alt="" />
                </div>

            </div>

            
            
            <div className="products  first-product"> 

                <div className={`single-product ${list && 'product-margin'}`}>
                    <img src={productTwo} alt="" />
                    <h5>Hydraring leave</h5>
                    <h6>$56.00</h6>
                </div>
                <div className="single-product">
                    <img src={productOne} alt="" />
                    <h5>Hydraring leave</h5>
                    <h6>$56.00</h6>
                </div>
                <div className="single-product">
                    <img src={productThree} alt="" />
                    <h5>Hydraring leave</h5>
                    <h6>$56.00</h6>
                </div>
                <div className="single-product">
                    <img src={productThree} alt="" />
                    <h5>Hydraring leave</h5>
                    <h6>$56.00</h6>
                </div>

                <div className="single-product">
                    <img src={productTwo} alt="" />
                    <h5>Hydraring leave</h5>
                    <h6>$56.00</h6>
                </div>
                <div className="single-product">
                    <img src={productOne} alt="" />
                    <h5>Hydraring leave</h5>
                    <h6>$56.00</h6>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Collections;