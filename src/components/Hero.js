import React from 'react'
import UserReg from './UserReg';


const Hero = (props) => {

  const [login, setLogin] = React.useState(false)

  function toggleLogin() { 
    setLogin(true)
  }
  function toggleReg() { 
    setLogin(false)
  }

  return (
    <div className='hero'>

        <div className="hero-container">
            <h1>comfort sleeper</h1>
            <h4>Experience No Bars. No Springs. <span>Pure Comfort.</span></h4>
            <a href="#" className="hero-btn">explore styles</a>
        </div>

        

        <>
          { props.reg && <UserReg login={login} loginClick={toggleLogin} toggleReg={toggleReg} />}
        </>
    </div>
  )
}

export default Hero