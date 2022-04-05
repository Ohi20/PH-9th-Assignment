

// import reviewHook from '../Hooks/ReviewHook';

import useReview from "../hook/customhook";

const Review = () => {
     const [reviews, setReviews] = useReview();

    
    return (
        <div>
            <h2>Review: {reviews.length}</h2>
            <div>
                <div>
                    {
                        // reviews.map(review=> <ReviewHome
                        // key={reviews.id}
                        // review={review}></ReviewHome>)
                    }
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Review;