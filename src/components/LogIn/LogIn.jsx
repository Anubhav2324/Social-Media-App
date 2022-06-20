import React from 'react'

const LogIn = () => {
  return (
    <div className="right">
            <form action="" className='infoForm authForm'>
            <h3>Log in</h3>
            <div>
                <input type="text" placeholder='Username' className='infoInput' name='userName'/>
            </div>
            <div>
                <input type="text" placeholder='Password' className='infoInput' name='password'/>
            </div>
            <div>
                <span style={{fontSize: '12px'}}>Don't have an account? Signup!</span>
                <button className='button su-button' type='submit'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default LogIn