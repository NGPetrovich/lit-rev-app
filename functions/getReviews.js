const axios = require("axios");
require("dotenv").config();
const { GET_REVIEWS } = require("./utils/reviewQueries.js");
const sendQuery = require("./utils/sendQuery.js");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return formattedResponse(405, { err: "Method not supported" });
  }
  try {
    const res = await sendQuery(GET_REVIEWS);
    const data = res.allReviews.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "something went wrong, maybe again" });
  }
};
