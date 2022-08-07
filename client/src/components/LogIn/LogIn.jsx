import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../actions/AuthActions';

const LogIn = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.authReducer.loading)
  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(data));
  }

  return (
    <div className="right">
      <form action="" className='infoForm authForm' onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <div>
          <input type="text" placeholder='Username' className='infoInput' name='username' onChange={handleChange} />
        </div>
        <div>
          <input type="password" placeholder='Password' className='infoInput' name='password' onChange={handleChange} />
        </div>
        <div>
          <span style={{ fontSize: '12px', cursor: "pointer" }} onClick={() => props.authState()}>Don't have an account? Signup!</span>
          <button className='button su-button' type='submit' disabled={loading}>{ loading? "Loading..." : "Log In"}</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn