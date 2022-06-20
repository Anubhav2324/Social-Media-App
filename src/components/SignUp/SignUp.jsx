import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="right">
            <form action="" className='infoForm authForm'>
            <h3>Sign up</h3>
            <div>
                <input type="text" placeholder='First Name' className='infoInput' name='firstName'/>
                <input type="text" placeholder='Last Name' className='infoInput' name='lastName'/>
            </div>
            <div>
                <input type="text" placeholder='Username' className='infoInput' name='userName'/>
            </div>
            <div>
                <input type="text" placeholder='Password' className='infoInput' name='password'/>
                <input type="text" placeholder='Confirm Password' className='infoInput' name='confirmPassword'/>
            </div>
            <div>
                <span style={{fontSize: '12px'}}>Already have an account? Login!</span>
                <button className='button su-button' type='submit'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp