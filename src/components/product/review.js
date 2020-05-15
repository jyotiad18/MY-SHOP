import React, { useState, useEffect } from "react";

const Review = (props) => {
    const [review, setReview] = useState(props.review);
    return (
        <div className='col col-12'>
            {
                review.length > 0 ? (
                    <div className="col col-12 review___load">
                        <span>Load reviews </span>
                    </div>
                )
                    : ""
            }
            <div className="table">
            {
                review.length > 0 && review.map((r, i) => (
                    
                        <div className="col col-4 review__details" key={i}>
                            <div className="col col-12">
                            {r.name} - {r.created_on}
                            </div>
                            <div className="col col-12">
                                {r.review}
                        </div>
                        <div className="col col-12">
                            {r.rating}
                        </div>
                        </div>
                    
                )
                )
                }
            </div>
        </div>
    );
}
export default Review;