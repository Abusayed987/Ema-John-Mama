import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="ema-john-logo" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;