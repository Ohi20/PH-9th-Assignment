import useReview from "../hook/customhook";
import ReviewCart from "../ReviewCart/ReviewCart";

const Review = () => {
    const [reviews, setReviews] = useReview();


    return (
        <div>
            <h2>Reviews: {reviews.length}</h2>
            <div>
                <div>
                    {
                        reviews.map(review => <ReviewCart
                            key={review.id}
                            review={review}></ReviewCart>
                        )


                    }


                </div>
            </div>
        </div>
    );
};

export default Review;