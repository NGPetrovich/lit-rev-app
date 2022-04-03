const formattedResponse = require("./helpers/formattedResponse");
const getReviews = require("./helpers/getReviews");
const createReview = require("./helpers/createReview");
const deleteReview = require("./helpers/deleteReview");
const updateReview = require("./helpers/updateReview");
exports.handler = async (event) => {
  // TODO: call appropriate helper function based on HTTP method
  return formattedResponse(200, "Hello World");
};
