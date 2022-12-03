import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import './Order.css'

import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, initialCart } = useLoaderData(); // { products: products, initialCart: initialCart };
    const [cart, setCart] = useState(initialCart);
    const removeHandler = (id) => {
        console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        removeHandler={removeHandler}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
                <Link to='/shipping' className='btn-shipping'>Process Shipping</Link>
            </div>
        </div>
    );
};

export default Orders;