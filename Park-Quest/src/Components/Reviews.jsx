import React, {useState } from "react";
import '../assets/css/Review.css'
import reviewDataJSON from "../Data/reviews.json";
import FilterReviews from "./FilterReviews";
import Footer from "./Footer";
import Header from "./Header";

function Reviews({onNav, theme, toggleTheme}) {
    const [reviewData, setReviewData] = useState(reviewDataJSON);
   
    const list = reviewData.map((review) => {
        return (
            <li className="list" key={review.reviewId}>
                <div className="review-panel">
                    <div className="name-date-rate-container">
                        <p className="name">{review.name}</p>
                        <div className="rating-container">
                            <span>- </span>
                            {[...Array(review.stars || 5)].map((star) => {
                                return (<span>    ⭐ </span>) ;
                            })}
                        </div>
                        <div className="date-container">
                            <p className="date">{review.date}</p>
                        </div>
                    </div>
                    <div className="desc-container">
                        <p className="desc">{review.description}</p>
                    </div>
                   
                </div>
            </li>
        );
    });
    return (
        <>
            <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme}/>
            <div className="reviews">
                <FilterReviews review = {reviewData} onClickSortOption = {setReviewData}/>
                <ul className="review-list">
                    {list}
                </ul>
            </div>
            <Footer />
        </>
       

    );

}

export default Reviews;