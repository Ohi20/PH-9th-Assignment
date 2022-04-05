
import "./ReviewHome.css";


const ReviewHome = (props) => {

    const { name, id, comment, ratings } = props.review;
    if (id !== 4) {

    }
    return (
        <div>

            <div className="ReviewHome reviewHome-card">
                <div>
                    <h1>Name: {name}</h1>
                    <h4>ID: {id}</h4>
                    <h2>Comment: {comment}</h2>
                    <h3>Ratings: {ratings} stars</h3>
                </div>

            </div>
        </div>

    );
};

export default ReviewHome;