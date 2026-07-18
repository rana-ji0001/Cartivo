import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../Hooks/auth/auth.hooks'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const { loading, handleLogin } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin({ email, password });
        navigate('/');
    }
    if (loading) {
        return (<auth><h1>Loading...</h1></auth>)
    }
    return (
        <auth>
            <div className='form-container'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} type="email" id='email' name='email' placeholder='Enter Email' />

                    </div>
                    <div className='input-group'>
                        <div className='password-wrapper'>
                            <label htmlFor="password">Password</label>
                            <input onChange={(e) => { setPassword(e.target.value) }} type={showPass ? "text" : "password"} id='password' name='password' placeholder='Enter Password!' className='password-input' />
                            <button type="button"
                                className="eye-btn"
                                onClick={() => setShowPass(!showPass)}>{showPass ? <FaEyeSlash /> : <FaEye />}</button>

                        </div>
                        <button className='shine-btn'>Register</button>
                    </div>
                    <button className='shine-btn'>Login</button>
                </form>
                <p>New Here..?<Link to={'/register'}>Register</Link></p>

            </div>
        </auth>
    )
}

export default Login
