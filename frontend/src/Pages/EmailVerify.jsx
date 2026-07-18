import React, { useState } from 'react'
import {useNavigate } from 'react-router'
import { useAuth } from '../Hooks/auth/auth.hooks'


const EmailVerify = () => {
    const navigate = useNavigate();
    const {loading, verification} = useAuth();
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("")
    const handleSubmit = async(e) => {
        e.preventDefault();
        await verification({otp, email});
        navigate("/");
    }
    if(loading){
        return (<auth><h1>loading...</h1></auth>)
    }
  return (
    <auth>
        <div className='form-container'>
            <h3>Verify Your Email First,(Check your spam if you don't find it in your inbox)</h3>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="email" id='email' name='email' placeholder='Enter Email' />

                </div>
                <div className='input-group'>
                    <label htmlFor="password">Otp</label>
                    <input onChange={(e) => {setOtp(e.target.value)}} type="text" id='password' name='password' placeholder='Enter Otp' />

                </div>
                <button className='shine-btn'>Verify</button>
            </form>
            {/* <p>Already Have an Account?<Link to={'/login'}>Login</Link></p> */}

        </div>
    </auth>
  )
}

export default EmailVerify
