import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product }) => {
    const { name, price, quantity, shipping, img } = product;
    console.log(product);
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="product-img" />
            </div>
            <div className="review-details-container">
                <div className='review-details'>
                    <b><p>{name}</p></b>
                    <p>Price: <span className='color'> ${price}</span></p>
                    <p>Shipping:<span className='color'> ${shipping}</span></p>
                    <p>Quantity:<span className='color'>{quantity}</span></p>
                </div>
                <div className="delete-container">
                    <button className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default ReviewItem;