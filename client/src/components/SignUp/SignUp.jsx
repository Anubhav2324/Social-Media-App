import React from 'react'
import { useState } from 'react'
import './SignUp.css'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../actions/AuthActions';

const SignUp = (props) => {
    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.authReducer.loading)
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const [confirmPass, setConfirmPass] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        data.password === data.confirmPassword ? dispatch(signUp(data)) : setConfirmPass(false);
    }


    return (
        <div className="right">
            <form action="" className='infoForm authForm' onSubmit={handleSubmit}>
                <h3>Sign up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange} />
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange} />
                </div>
                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username' onChange={handleChange} />
                </div>
                <div>
                    <input type="password" placeholder='Password' className='infoInput' name='password' onChange={handleChange} />
                    <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmPassword' onChange={handleChange} />
                </div>
                <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "15px" }}>
                    * Confirm Password is not Same
                </span>
                <div>
                    <span style={{ fontSize: '12px', cursor: "pointer" }} onClick={() => props.authState()}>Already have an account? Login!</span>
                    <button className='button su-button' type='submit' disabled={loading}>{ loading? "Loading..." : "Log In"}</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp