import React, { useEffect, useState } from "react";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [reviews, setReviews] = useState([]);

  const loadReviews = async () => {
    try {
      const res = await fetch("/.netlify/functions/getReviews");
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
    <div className="container py-5">
      <h1 className="text-center mb-5">Literature Review</h1>
      <ReviewForm refreshReviews={loadReviews} />
      <ReviewList reviews={reviews} refreshReviews={loadReviews} />
    </div>
  );
}

export default App;
