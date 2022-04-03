import React from "react";
import Review from "./Review";

export default function ReviewList({ reviews, refreshReviews }) {
  return (
    <div>
      <h2 className="mt-5 mb-3">Reviews</h2>
      <div className="list-group">
        {reviews
          .filter((review) => !review.finished)
          .map((review) => (
            <Review
              key={review.id}
              review={review}
              refreshReviews={refreshReviews}
            />
          ))}
      </div>

      <h2 className="my-5 mb-3">Completed:</h2>
      {reviews
        .filter((review) => review.finished)
        .map((review) => (
          <Review
            key={review.id}
            review={review}
            refreshReviews={refreshReviews}
          />
        ))}
    </div>
  );
}
