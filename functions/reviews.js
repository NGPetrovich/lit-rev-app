const formattedResponse = require("./helpers/formattedResponse");
const getReviews = require("./helpers/getReviews");
const createReview = require("./helpers/createReview");
const deleteReview = require("./helpers/deleteReview");
const updateReview = require("./helpers/updateReview");
exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return await getReviews(event);
  } else if (event.httpMethod === "POST") {
    return await createReview(event);
  } else if (event.httpMethod === "PUT") {
    return await updateReview(event);
  } else if (event.httpMethod === "DELETE") {
    return await deleteReview(event);
  } else {
    return formattedResponse(405, {});
  }
};
