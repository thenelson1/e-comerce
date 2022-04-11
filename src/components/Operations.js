import React from 'react'
import './operations.css'


import { MdOutlineLocalShipping, MdOutlineLocalPhone, MdOutlineKeyboardReturn } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'
const Operations = () => {
  return (
    <div className='operations-container'>
        <div className="operation">
            <MdOutlineLocalShipping className='illustration' />
            <h4 className='illustration-header'>Free shipping</h4>
            <h5 className='operation-description'>Free shipping on all US order or order above $200</h5>
        </div>
        <div className="operation operation-border">
            <MdOutlineLocalPhone className='illustration' />
            <h4 className='illustration-header'>Support 24/7</h4>
            <h5 className='operation-description'>Contact us 24 hours a day, 7 days a week</h5>
        </div>
        <div className="operation operation-border">
            <MdOutlineKeyboardReturn className='illustration' />
            <h4 className='illustration-header'>7 Days Return</h4>
            <h5 className='operation-description'>Simply return it within 7 days for an exchange.</h5>
        </div>
        <div className="operation operation-border">
            <RiSecurePaymentLine className='illustration' />
            <h4 className='illustration-header'>Payment Secure</h4>
            <h5 className='operation-description'>We ensure secure payment with PEV</h5>
        </div>

    </div>
  )
}

export default Operations