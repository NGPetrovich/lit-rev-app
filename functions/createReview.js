const axios = require("axios");
require("dotenv").config();
const { CREATE_REVIEW } = require("./utils/reviewQueries.js");
const sendQuery = require("./utils/sendQuery.js");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return formattedResponse(405, { err: "Method not supported" });
  }
  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description, archived: false };
  try {
    const { createReview: createdReview } = await sendQuery(
      CREATE_REVIEW,
      variables
    );
    return formattedResponse(200, createdReview);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "something went wrong, maybe again" });
  }
};
