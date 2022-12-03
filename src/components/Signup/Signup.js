import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
const Signup = () => {
    return (
        <div className='signup-container'>
            <h4 className='form-tittle'>Sign Up</h4>
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
                <p>Already have an account?<Link to='/login'>  Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;