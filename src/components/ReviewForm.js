import React, { useState } from "react";

export default function ReviewForm(refreshReviews) {
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setName("");
    setURL("");
    setDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, url, description };
    try {
      const res = await fetch("/.netlify/functions/createReview", {
        method: "POST",
        body: JSON.stringify(body),
      });
      resetForm();
      refreshReviews();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">Add Review</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">Reference</label>
            <input
              type="text"
              name="url"
              className="form-control"
              value={url}
              onChange={(e) => setURL(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Citations and Key Points</label>
            <input
              name="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
