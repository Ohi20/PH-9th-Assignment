import React from 'react';
import "./ReviewHome.css";


const ReviewHome = (props) => {
    // const {name,id,comment,ratings} = props.reviews;
    return (
        <div className='ReviewHome'>
            <div className='ReviewHome-header'>
                <h2>This is all review</h2>
                {/* <h2>Name:{name}</h2> */}
            </div>
            <div>
                <button>See all reviews</button>
            </div>
        </div>

    );
};

export default ReviewHome;