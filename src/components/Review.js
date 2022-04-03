import React from "react";

export default function Review({ review, refreshReviews }) {
  const markReviewFinished = async () => {};
  const deleteReview = async () => {};
  return (
    <div className="list-group-item">
      <a href={review.link}>
        <h4 className="list-group-item-heading">{review.name}</h4>
      </a>
      <p>
        Tags:{" "}
        {review.tags &&
          review.tags.map((tag, index) => (
            <span className="badge badge-primary mr-2" key={index}>
              {tag}
            </span>
          ))}
      </p>
      {!review.finished && (
        <button className="btn btn-sm btn-primary" onClick={markReviewFinished}>
          Finished
        </button>
      )}
      <button className="btn btn-sm btn-danger ml-2" onClick={deleteReview}>
        Delete
      </button>
    </div>
  );
}
