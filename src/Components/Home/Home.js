import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../hook/customhook';
import ReviewHome from '../ReviewHome/ReviewHome';

import "./Home.css";

const Home = () => {
    const [reviews, setReviews] = useReview();

    let navigate = useNavigate();
    const handleReview = () => {
        let path = `/review`;
        navigate(path);
    }
    return (
        <div >

            <div className='home'>
                <div className='header-text'>
                    <h3 className='welcome-text'>Welcome</h3>
                    <p className='paragraph-text'>Reading not only has tremendous power when it comes to fueling the development of all aspects of language ability, its importance to the entirety of a human life in this day and age really can’t be overstated.</p>
                    <button className='home-btn'>Explore!</button>
                </div>
                <div className='home-img'>
                    <img src='https://storage.googleapis.com/circlesoft/tiny_mce/0004/6085/original_favesnraves_2021_web_crop.jpg?8' alt=''></img>
                </div>
            </div>
            <hr></hr>
            <div>
                <h1 className='review-header'>All Reviews</h1>
                {
                    reviews.map(review => <ReviewHome
                        key={review.id}
                        review={review}></ReviewHome>
                    )
                }
                <div>
                    <button className='review-btn' onClick={handleReview} >See all review</button>
                </div>

            </div>

        </div>
    );
};

export default Home;