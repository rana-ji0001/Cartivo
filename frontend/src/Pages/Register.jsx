import React, { useState } from 'react'
import { useAuth } from '../Hooks/auth/auth.hooks';
import { Link, useNavigate } from 'react-router';
import '../Styles/auth.css'

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loading, handleRegister} = useAuth();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await handleRegister({username,email,password});
        navigate('/verify-email')

    }
    if(loading){
        return (<auth><h1>Loading...</h1></auth>)
    }

  return (
    <auth>
        <div className='form-container'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor="username">Username</label>
                    <input onChange={(e) => {setUsername(e.target.value)}} type="text" id='username' name='username' placeholder='Enter Username' />

                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="email" id='email' name='email' placeholder='Enter Email' />

                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" id='password' name='password' placeholder='Enter Password!' />

                </div>
                <button className='shine-btn'>Register</button>
            </form>
            <p>Already Have an Account?<Link to={'/login'}>Login</Link></p>

        </div>
    </auth>
  )
}

export default Register
