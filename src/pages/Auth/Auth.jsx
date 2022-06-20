import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import SignUp from '../../components/SignUp/SignUp'
import LogIn from '../../components/LogIn/LogIn'

const Auth = () => {
  return (
    <div className='Auth'>
        <div className="left">
            <img src={Logo} alt="" />
            <div className="appName">
                <h1>Tweetbook</h1>
                <h6>Connecting People</h6>
            </div>
        </div>
        <SignUp />
        {/* <LogIn /> */}
    </div>
  )
}


export default Auth