import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Login.css'
const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();


    const handleLoginUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                setSuccess('Successfully login !')
                console.log(user);
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div className='login-container'>
            <h4 className='form-tittle'>Login</h4>
            <form className='form-container' onSubmit={handleLoginUser}>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <p className='error-text'>{error}</p>
                <p className='error-text'>{success}</p>
                <button className='btn-submit' type='submit' value='login'>Login</button>
                <p>New to Ema-john? <Link to='/signup'> Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;