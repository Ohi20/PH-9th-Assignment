import React from 'react';
import "./ReviewHome.css";


const ReviewHome = (props) => {
    //  const {name,id,comment,ratings} = props.review;
    return (
        <div className='ReviewHome'>
            <div className='ReviewHome-header'>
                <h2>This is all review</h2>
                <div>
                {/* <div className='reviewcart'>
            <h2>Name: {name}</h2>
            <h4>ID: {id}</h4>
            <h2>Comment: {comment}</h2>
            <h3>Ratings: {ratings} stars</h3>
            </div> */}
                </div>
            </div>
            <div>
                <button>See all reviews</button>
            </div>
        </div>

    );
};

export default ReviewHome;