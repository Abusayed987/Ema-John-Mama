import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../Context/UserContext';
import './Header.css'
const Header = () => {
    const { user, logoutUser, } = useContext(AuthContext)

    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="ema-john-logo" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {user?.uid ?
                        <>
                            <Link onClick={logoutUser} to='/' className='btn-logout-signin-signup'>Log Out</Link>
                            {/* <img className='profile-picture' src={user?.photoURL} alt="profile-picture" /> */}
                        </>
                        :
                        <>
                            <Link to="/login" className='btn-logout-signin-signup'>Login</Link>
                            <Link to="/signup" className='btn-logout-signin-signup'>Sign up</Link>
                        </>
                    }

                </div>
            </nav>
        </div>
    );
};

export default Header;


