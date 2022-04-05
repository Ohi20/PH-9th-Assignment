import React from 'react';
import "./ReviewCart.css";

const ReviewCart = (props) => {
    const { name, id, comment, ratings } = props.review;
    return (
        <div className='reviewbox'>
            <div className='reviewcart'>
                <h2>Name: {name}</h2>
                <h4>ID: {id}</h4>
                <h2>Comment: {comment}</h2>
                <h3>Ratings: {ratings} stars</h3>
            </div>
        </div>
    );
};

export default ReviewCart;