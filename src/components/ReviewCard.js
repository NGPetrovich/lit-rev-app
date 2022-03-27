import React from "react";

export default function ReviewCard({ review, refreshReviews }) {
  const archiveReview = async () => {
    review.archived = true;
    try {
      await fetch("api/updateReview", {
        method: "PUT",
        body: JSON.stringify(review),
      });
      refreshReviews();
    } catch (error) {
      console.error("PROBLEM EOROROR", error);
    }
  };

  const deleteReview = async () => {
    const id = review._id;
    try {
      await fetch("api/deleteReview", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      refreshReviews();
    } catch (error) {
      console.error("PROBLEM EOROROR", error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">{review.name}</div>
      <div className="card-body">
        <a href="review.url">{review.url}</a>
        <p>{review.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-warning mr-10" onClick={archiveReview}>
          Archive
        </button>
        <button className="btn btn-danger" onClick={deleteReview}>
          Delete
        </button>
      </div>
    </div>
  );
}
