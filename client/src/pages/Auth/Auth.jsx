import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import SignUp from '../../components/SignUp/SignUp'
import LogIn from '../../components/LogIn/LogIn'
import { useState } from 'react'

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleSignUp = () =>{
    setIsSignUp((prev)=>{
      return !prev
    })
  }

  return (
    <div className='Auth'>
        <div className="left">
            <img src={Logo} alt="" />
            <div className="appName">
                <h1>Tweetbook</h1>
                <h6>Connecting People</h6>
            </div>
        </div>
        {isSignUp ? <SignUp authState = {toggleSignUp} /> : <LogIn authState = {toggleSignUp} />} 
    </div>
  )
}


export default Auth