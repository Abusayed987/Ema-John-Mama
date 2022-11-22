import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h3>Order Summary </h3>
            <p>Selected Items :{cart.length}</p>
            <p>Total Price : $</p>
            <p>Total Shipping Charge: $</p>
            <p>tax: $</p>
            <h4>Grand Total : $</h4>
        </div>
    );
};

export default Cart;