const axios = require("axios");
require("dotenv").config();
const { DELETE_REVIEW } = require("./utils/reviewQueries.js");
const sendQuery = require("./utils/sendQuery.js");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async (event) => {
  if (event.httpMethod !== "DELETE") {
    return formattedResponse(405, { err: "Method not supported" });
  }

  const { id } = JSON.parse(event.body);
  const variables = { id };
  try {
    const { deleteReview: deletedReview } = await sendQuery(
      DELETE_REVIEW,
      variables
    );
    return formattedResponse(200, deletedReview);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "something went wrong with delete" });
  }
};
