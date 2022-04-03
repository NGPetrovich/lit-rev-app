import React, { useState } from "react";
import Tags from "./Tags";

export default function ReviewForm({ reviewAdded }) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);
  const [count, setCount] = useState(0);

  const resetForm = () => {
    setName("");
    setAuthor("");
    setCount(count + 1);
  };

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/.netlify/functions/reviews", {
        method: "POST",
        body: JSON.stringify({ name, author, tags }),
      });
      const data = await res.json();
      resetForm();
      reviewAdded();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <div className="card-header">Add a new review:</div>
      <div className="card-body">
        <form className="" onSubmit={submitReview}>
          <div className="form-group">
            <label htmlFor="name">What did I read?</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Who is(are) the author(s)?</label>
            <input
              type="text"
              name="author"
              value={author}
              className="form-control"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <p>Tags</p>
            <Tags tagsUpdated={setTags} key={count} />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
