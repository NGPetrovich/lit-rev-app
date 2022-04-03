import React from "react";
import ReviewCard from "./Review";

export default function ReviewList({ reviews, refreshReviews }) {
  return (
    <div>
      <h2 className="mt-5 mb-3">Reviews</h2>
      <div className="list-group">
        {reviews &&
          reviews
            .filter((review) => !review.finished)
            .map((review) => (
              <Review
                key={review.id}
                review={review}
                refreshReviews={refreshReviews}
              />
            ))}
      </div>

      <h2 className="my-5 mb-3">Finished reading:</h2>
      {reviews &&
        reviews
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
