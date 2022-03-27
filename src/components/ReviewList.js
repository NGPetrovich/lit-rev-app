import React from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewList({ reviews, refreshReviews }) {
  return (
    <div>
      <h2 className="my-4">Reviews</h2>
      {reviews &&
        reviews
          .filter((review) => !review.archived)
          .map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              refreshReviews={refreshReviews}
            />
          ))}

      <h2 className="my-4">Archived</h2>
      {reviews &&
        reviews
          .filter((review) => review.archived)
          .map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              refreshReviews={refreshReviews}
            />
          ))}
    </div>
  );
}
