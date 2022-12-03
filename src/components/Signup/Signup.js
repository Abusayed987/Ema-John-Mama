import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Signup.css'

const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState(null);

    const handleSubmitSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm);

        if (6 > password.length) {
            setError('Password should me more than 6  characters!')
            return;
        }
        if (password !== confirm) {
            setError('Your Password did not match !')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => {
                console.error(error)
                // setError(error)
            })
    }
    return (
        <div className='signup-container'>
            <h4 className='form-tittle'>Sign Up</h4>
            <form className='form-container' onSubmit={handleSubmitSignUp}>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="from-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <p className='error-text'>{error}</p>
                <button className='btn-submit' type='submit' value='login'>Sign Up</button>
                <p>Already have an account?<Link to='/login'>  Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;