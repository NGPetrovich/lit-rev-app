import React, { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [reviews, setReviews] = useState([]);

  const loadReviews = async () => {
    try {
      const res = await fetch("/.netlify/functions/reviews");
      const reviews = await res.json();
      setReviews(reviews);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadReviews();
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Literature Review</h1>
      <ReviewForm reviewAdded={loadReviews} />
      <ReviewList reviews={reviews} refreshReviews={loadReviews} />
    </div>
  );
}

export default App;
