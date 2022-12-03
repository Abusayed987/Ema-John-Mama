import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='login-container'>
            <h4 className='form-tittle'>Login</h4>
            <form className='form-container'>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <button className='btn-submit' type='submit' value='login'>Login</button>
                <p>New to Ema-john? <Link to='/signup'> Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;