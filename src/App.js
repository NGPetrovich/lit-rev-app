import React, { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [reviews, setReviews] = useState([]);

  const loadReviews = async () => {
    //TODO:load the reviews
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
