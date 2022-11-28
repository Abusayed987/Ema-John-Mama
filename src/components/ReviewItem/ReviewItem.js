import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product }) => {
    const { name, price, quantity, img } = product;
    console.log(product);
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="product-img" />
            </div>
            <div className="review-details-container">
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="delete-btn">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;