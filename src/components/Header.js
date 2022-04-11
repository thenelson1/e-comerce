import React from 'react';

import { FaUserCircle, FaBars } from 'react-icons/fa';

const Header = (props) => {

    const [nav, setNav] = React.useState(false)

    function toggleNav () {
        setNav(prevState => !prevState)
    }
  return (
    <>
        <header>
        <div className="container">
            <h4>thenels0n <span></span></h4>
            <nav>
                <ul className='header-list'>
                    <li><a href="#">comfort sleeper</a> </li>
                    <li><a href="#">comfort air</a> </li>
                    <li><a href="#">All products</a> </li>
                    <li><a href="#">leather fabrics</a> </li>
                </ul>
            

            <ul className='ctn'>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
            </ul>

            <FaUserCircle onClick={props.onClick} className='header-icon' />
        </nav>
        
            <FaBars onClick={toggleNav} className='bars' />
            
        </div>
        
        </header>
        { nav && <div className="menu">
            <a href="#">comfort sleeper</a>
            <a href="#">comfort air</a>
            <a href="#">All products</a>
            <a href="#">leather fabrics</a>
            <a href="#">About us</a>
            <a href="#">Blog</a>
        </div>
        }
    </>
  )
}

export default Header