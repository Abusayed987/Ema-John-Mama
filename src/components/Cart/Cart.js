import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = ({ cart }) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping;
    }
    const tax = +(total * 0.10).toFixed(2);
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary </h3>
            <p>Selected Items :{quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>tax: ${tax}</p>
            <h4>Grand Total : ${grandTotal}</h4>
        </div>
    );
};

export default Cart;