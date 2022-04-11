import React from 'react'

const UserReg = (props) => {
  return (
    <>
        <div className="user">
            <div className="user-registration">
                <div className="reg-title">
                    <h3 onClick={props.toggleReg}>Register</h3> 
                    <h3 onClick={props.loginClick}>Login</h3> 
                </div>

                { !props.login ? <form action="">
                    <h2>Create an account</h2>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='Username'/>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email'/>
                    <label htmlFor="password1">Password</label>
                    <input type="password" placeholder='Password' />
                    <label htmlFor="password2">Confirm password</label>
                    <input type="password" placeholder='Confirm password' />

                    <input className='form-submit' type="submit" value="Register" />
                </form>
                :
                <form action="">
                    <h2>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email'/>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Password' />

                    <input className='form-submit' type="submit" value="Register" />
                </form>}
            </div>

            
        </div>
    </>
  )
}

export default UserReg;